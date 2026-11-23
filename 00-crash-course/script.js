
// function barToKpa(bar){
//     console.log(`${bar} bar equal to ${100*bar} kPa`);
//     return 100 * bar;
// }

// function kPaTobar(kPa){
//     console.log(`${kPa} kPa equal to ${kPa / 100} bar`);
//     return kPa / 100
// }


// function waterVapourPressure(Tc){
//     if (Tc > 100 || Tc < 1){
//         console.warn("Input temperature outside range");
//         return NaN;
//     }
//     const corr_factor = 0.133322; //kPa
//     const A = 8.07131;
//     const B = -1730.63;
//     const C = 233.426;
//     let p = Math.pow(10, A + B / (C + Tc));
//     return corr_factor * p;
// }


// function waterPhase(Tc, PkPa){
//     const vapour_p = waterVapourPressure(Tc);
//     if (vapour_p > PkPa){
//         console.log("Vapour");
//         return "Vapour";
//     } else {
//         console.log("Liquid");
//         return("Liquid");
//     }
// }


// function phaseTable(Pc){
//     for (let Tc = 20; Tc <= 100; Tc += 10){
//         waterPhase(Tc, Pc)
//     }
// }

// console.log(barToKpa(kPaTobar(3)))
// console.log(waterVapourPressure(60))
// waterPhase(80, 101.3);
// waterPhase(120, 101.3);
// waterPhase(120, 300);
// phaseTable(101.3);