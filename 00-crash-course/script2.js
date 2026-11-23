// const streams = [
//     { id: "s1", name: "Feed",   T: 300, P: 500, flow: 100 },
//     { id: "s2", name: "Vapour", T: 285, P: 100, flow: 35 },
//     { id: "s3", name: "Liquid", T: 285, P: 100, flow: 65 },
// ]

// //Exercise 1
// const ex1 = streams.map((s) => `${s.name}: ${s.T} K, ${s.P} kPa`);
// console.log(ex1);

// //Exercise 2
// const ex2 = streams.filter((s) => s.P == 100).map((s) => s.name);
// console.log(ex2);

// //Exercise 3
// const ex3 = streams.find((s) => s.id === "s3").flow;
// console.log(ex3);

// //Exercise 4
// function checkBalance(streams){
//     const feed_flow = streams.find((s) => s.name === 'Feed').flow;
//     const vapour_flow = streams.find((s) => s.name === 'Vapour').flow;
//     const liquid_flow = streams.find((s) => s.name === 'Liquid').flow;
//     return feed_flow === vapour_flow + liquid_flow ? true : false;
// }
// console.log(checkBalance(streams));

// //Exercise 5
// const updated = streams.map((s) => (s.name === "Feed" ? { ...s, T: 320 } : s))
// console.log(streams[0].T);
// console.log(updated[0].T);

// //Exercise 6
// const ex6_add = [...streams, { id: "s4", name: "Recycle", T: 290, P: 100, flow: 10 }];
// const ex6_add_without_s2 = [...streams.filter((s) => s.id != 's2'), { id: "s4", name: "Recycle", T: 290, P: 100, flow: 10 }];
// console.log(ex6_add);
// console.log(ex6_add_without_s2)

// //Bonus
// function describe(stream){
//     const {name, T, P} = stream;
//     return `The stream ${name} has temperature ${T} K and pressure ${P} kPa`;
// }
// console.log(describe(streams[0]));