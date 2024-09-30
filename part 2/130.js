// synchronus programing vs asynchronus programing.
// synchronus programing.
// isme jab tak phela task complete nhi hota tab tak alagla task shuru nhi hoga.
// console.log("script start");

// for(let i =1; i<10000; i++) {
//     console.log("inside for loop");
// }

// console.log("script end");


// starting of asynchronus programing.

// setTimeout.

console.log("script start");

const id = setTimeout(()=>{
        console.log("inside settimeout");
    },0);

    for (let i = 1; i<100; i++){
        console.log("printed");
    }
console.log("setTimeout is id",id);
console.log("cleraing time out");
clearTimeout(135.jsid);
console.log("script end");