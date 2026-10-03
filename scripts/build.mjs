import {dirname, relative, resolve} from 'node:path'
import {fileURLToPath} from 'node:url'
import {existsSync, readdirSync} from 'node:fs'
import {buildPackage, compilerPath as findCompiler} from './compiler-package.mjs'
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
export const compilerPath = () => findCompiler(root)
const args = process.argv.slice(2)
const modes = ['--dev','--prod','--min'].filter(flag => args.includes(flag))
if (modes.length > 1) throw Error('Choose only one of --dev, --prod and --min')
const dev = !modes.length || modes[0] === '--dev'
const prod = !modes.length || modes[0] === '--prod'
const min = !modes.length || modes[0] === '--min'
const profiles = []
if (dev) profiles.push({name:'development',config:'config/dev.toml',mode:'development'})
if (prod) profiles.push({name:'production',config:'lilscript.toml'})
if (min) profiles.push({name:'min',config:'config/production.min.toml'})
profiles.push({name:'package',config:'config/package.toml'})
const aliases = {'mobx.mjs':prod ? 'mobx.esm.js' : dev ? 'mobx.dev.esm.js' : 'mobx.esm.production.min.js'}
if (dev) aliases['mobx.esm.development.js'] = 'mobx.dev.esm.js'
if (prod && !min) {
  aliases['mobx.esm.production.min.js'] = 'mobx.esm.js'
  aliases['mobx.cjs.production.min.js'] = 'mobx.cjs.production.js'
  aliases['mobx.umd.production.min.js'] = 'mobx.umd.production.js'
}
const declarations = resolve(root, 'node_modules/mobx/dist')
const walk = path => readdirSync(path,{withFileTypes:true}).flatMap(entry => {
  const file=resolve(path,entry.name)
  return entry.isDirectory() ? walk(file) : file.endsWith('.d.ts') ? [file] : []
})
const assets = existsSync(declarations) ? walk(declarations).map(source => ({source,destination:relative(declarations,source)})) : []
await buildPackage({root,profiles,aliases,assets})
