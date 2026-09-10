
const data = await fetch("./results.json").then((response) => {
  if (!response.ok) throw new Error(`Unable to load results: ${response.status}`)
  return response.json()
})

const formatter = new Intl.NumberFormat("en-US")

function ms(value) {
  return `${value.toFixed(2)} ms`
}

function times(value) {
  return `${value.toFixed(3)}×`
}

function renderDemos() {
  const demoGrid = document.querySelector("#demo-grid")
  demoGrid.innerHTML = data.examples.map((example, index) => `
    <article class="demo-card" style="--order:${index}">
      <header>
        <div>
          <span class="case-number">${String(index + 1).padStart(2, "0")}</span>
          <h3>${example.title}</h3>
        </div>
        <strong class="saving">live</strong>
      </header>
      <div class="demo-frame-wrap">
        <iframe
          src="./examples/${encodeURIComponent(example.id)}.html"
          title="${example.title} @itslil/mobx demo"
          loading="lazy"
        ></iframe>
      </div>
      <footer>
        <span>${example.blurb}</span>
        <div>
          <a href="./examples/${encodeURIComponent(example.id)}.html">open ↗</a>
          <button class="replay" type="button" aria-label="Replay ${example.title}">replay ↻</button>
        </div>
      </footer>
    </article>
  `).join("")

  demoGrid.addEventListener("click", (event) => {
    const button = event.target.closest(".replay")
    if (!button) return
    const iframe = button.closest(".demo-card").querySelector("iframe")
    iframe.src = iframe.src
  })
}

function renderSize() {
  const baseline = data.size.find((lane) => lane.baseline) ?? data.size[0]
  document.querySelector("#results-body").innerHTML = data.size.map((lane) => `
    <tr>
      <th scope="row">${lane.name}</th>
      <td>${formatter.format(lane.raw)}</td>
      <td>${formatter.format(lane.gzip9)}</td>
      <td>${formatter.format(lane.brotli11)}</td>
      <td><strong>${(lane.brotli11 / baseline.brotli11).toFixed(2)}×</strong></td>
    </tr>
  `).join("")

  const max = Math.max(...data.size.map((lane) => lane.brotli11))
  document.querySelector("#total-bar").innerHTML = data.size.map((lane) => {
    const width = Math.max(18, (lane.brotli11 / max) * 100)
    const cls = lane.primary ? "bar-lil" : "bar-official"
    return `<div class="${cls}" style="width:${width}%"><span>${lane.name}</span><strong>${formatter.format(lane.brotli11)} B</strong></div>`
  }).join("")
}

function renderPerf() {
  const suites = data.throughput
  const faster = suites.filter((suite) => suite.ratio < 1).length
  const cards = [
    { label: "suites ≤ 1.05×", value: `${suites.filter((suite) => suite.ratio <= 1.05).length}/${suites.length}`, geo: true },
    { label: "faster than official", value: String(faster), win: true },
    { label: "worst suite", value: times(Math.max(...suites.map((suite) => suite.ratio))) },
    { label: "retained memory", value: times(data.memory.retainedRatio), win: data.memory.retainedRatio <= 1 }
  ]
  document.querySelector("#perf-cards").innerHTML = cards.map((card) => `
    <article class="perf-card${card.win ? " win" : ""}${card.geo ? " geo" : ""}">
      <span>${card.label}</span>
      <strong>${card.value}</strong>
      <span>${data.node}</span>
    </article>
  `).join("")

  document.querySelector("#perf-body").innerHTML = suites.map((suite) => `
    <tr>
      <th scope="row">${suite.name}</th>
      <td>${ms(suite.officialMs)}</td>
      <td>${ms(suite.candidateMs)}</td>
      <td><strong>${times(suite.ratio)}</strong></td>
    </tr>
  `).join("")

  document.querySelector("#perf-note").textContent =
    `Official mobx@7.0.0 tests: ${data.tests.passed} passed, ${data.tests.failed} failed (${data.tests.pending} skipped in upstream). Node ${data.node}, NODE_ENV=production, 8 samples, first 2 discarded, median of the rest. Ratio is @itslil/mobx / official (lower is faster). Checksums match.`
}

renderDemos()
renderSize()
renderPerf()
document.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-copy]")
  if (!button) return
  await navigator.clipboard.writeText(button.dataset.copy)
  const previous = button.textContent
  button.textContent = "copied!"
  window.setTimeout(() => { button.textContent = previous }, 1400)
})

const progress = document.querySelector(".progress")
function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight
  progress.style.transform = `scaleX(${scrollable > 0 ? window.scrollY / scrollable : 0})`
}
window.addEventListener("scroll", updateProgress, { passive: true })
updateProgress()
