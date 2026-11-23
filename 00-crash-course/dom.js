function waterVapourPressure(Tc){
    if (Tc > 100 || Tc < 1){
        console.warn("Input temperature outside range");
        return NaN;
    }
    const corr_factor = 0.133322; //kPa
    const A = 8.07131;
    const B = -1730.63;
    const C = 233.426;
    let p = Math.pow(10, A + B / (C + Tc));
    return corr_factor * p;
}


function waterPhase(Tc, PkPa) {
    const vapourP = waterVapourPressure(Tc)
    if (Number.isNaN(vapourP)) {
        return "Unknown"          // don't guess
    }
    return vapourP > PkPa ? "Vapour" : "Liquid"
}

const tempInput = document.querySelector("#temp-input")
const pressureInput = document.querySelector("#pressure-input")
const runButton = document.querySelector("#run-flash")
const result = document.querySelector("#result")

runButton.addEventListener("click", () => {
    const Tc = Number(tempInput.value)        // read what the user typed (it's text, so convert it)
    const P = Number(pressureInput.value)
    const phase = waterPhase(Tc, P)

    result.textContent = `Water at ${Tc} °C and ${P} kPa: ${phase}`
    result.className = phase.toLowerCase()    // "vapour" or "liquid": reuses your CSS colours!
})

const streams = [
    { id: "s1", name: "Feed",   T: 300, P: 500, flow: 100 },
    { id: "s2", name: "Vapour", T: 285, P: 100, flow: 35 },
    { id: "s3", name: "Liquid", T: 285, P: 100, flow: 65 },
]

const tbody = document.querySelector("#stream-rows")

function renderStreams() {
    tbody.innerHTML = ""                          // remove all old rows
    for (const s of streams) {
        const row = document.createElement("tr")  // make a new <tr>
        row.innerHTML = `<td>${s.name}</td><td>${s.T}</td><td>${s.P}</td><td>${s.flow}</td>`
        tbody.appendChild(row)                    // put it into the table
    }
}



renderStreams()

function updateResult() {
    document.querySelector("#heat-feed").addEventListener("click", () => {
    streams[0].T += 10
    renderStreams();
})
}
runButton.addEventListener("click", updateResult)
tempInput.addEventListener("input", updateResult)