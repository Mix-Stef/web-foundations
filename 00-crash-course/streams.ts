//Exercise 1
type Stream = {
    id: string
    name: string
    T: number      // K
    P: number      // kPa
    flow: number   // kmol/h
}

const streams = [
    { id: "s1", name: "Feed",   T: 300, P: 500, flow: 100 },
    { id: "s2", name: "Vapour", T: 285, P: 100, flow: 35 },
    { id: "s3", name: "Liquid", T: 285, P: 100, flow: 65 },
]
const s: Stream[] = [...streams]
console.log(s);

//Exercise 2
function setFeedTemperature(streams: Stream[], T: number): Stream[]{
    return streams.map((s) => (s.name === "Feed" ? { ...s, T: 320 } : s));
}
console.log(s);
console.log(setFeedTemperature(s, 320));

//Exercise 3
function checkBalance(streams: Stream[]): boolean{
    const tol = 0.001;
    const feed_flow = streams.find((s) => s.name === 'Feed').flow;
    const vapour_flow = streams.find((s) => s.name === 'Vapour').flow;
    const liquid_flow = streams.find((s) => s.name === 'Liquid').flow;
    return Math.abs(feed_flow - vapour_flow - liquid_flow) < tol;
}
console.log(checkBalance(s));

//Exercise 4
type Phase = "Vapour" | "Liquid" | "Unknown";

function waterVapourPressure(Tc: number): number{
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

function waterPhase(Tc: number, PkPa: number): Phase {
    const vapourP = waterVapourPressure(Tc)
    if (Number.isNaN(vapourP)) {
        return "Unknown"         
    }
    return vapourP > PkPa ? "Vapour" : "Liquid"
}

//Exercise 5
console.log(waterPhase(80, 'Pressure')); //Error: Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(waterPhase(101.1)); //Error: Expected 2 arguments, but got 1.
