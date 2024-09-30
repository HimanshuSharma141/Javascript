// console.log("hello world");
// iss file me mene nyi html file event bubling capturing wali banyi h.
// css ki bhi nhyi file evt bcd.css naam se



const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");


// capturing events.
// child.addEventListener("click",()=>{
//     console.log("capture !!! child");
// },true);

// parent.addEventListener("click",()=>{
//     console.log("capture !!!  parent");
// },true);

// grandparent.addEventListener("click",()=>{
    // console.log("capture !!!  grandparent");
// },true);
// document.body.addEventListener("click",()=>{
    // console.log("capture !!!  document body");
// },true);

// not capture.

// child.addEventListener("click",()=>{
//     console.log("bubble child");
// });

// parent.addEventListener("click",()=>{
//     console.log( "bubble parent");
// });

// grandparent.addEventListener("click",()=>{
//     console.log("bubble grandparent");
// });
// document.body.addEventListener("click",()=>{
//     console.log("bubble document body");
// });


// event delegation.
// isme agar apn grandparent pe lagyege tho teeno pe hi output dega.
grandparent.addEventListener("click", (e)=>{
    console.log(e.target);
});