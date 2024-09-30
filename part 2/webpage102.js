// DOM 
// document object model 
// overview 
// how to use 
// deep study
// console.dir(document);




// select element using get element by id.

// const mainHeading =  document.getElementById("main-heading");
// console.log(mainHeading);


// it will only works for id classes.


// elements quary selector 104.
 // it can select any class.
 // we can only give one id in a page but can give multiple classes.

//  const mainHeading = document.querySelector("#main-heading");       // if we are putting the # sign before the calling class it will call it.
//  const header = document.querySelector(".header");
//  const navItem = document.querySelectorAll(".nav-item");        // isme 3 jaghe nav item h tho all ka use kar ke apn teeno ko call kar sakte h warna quarryselector se sirf first wala hi hoga.
//  console.log(navItem);


 // change text 105
 //textcontent and innercontent.
//by using this we can change the line in the webpage by using js only .

//TEXTCONTENT
// const mainHeading =  document.getElementById("main-heading");
// console.log(mainHeading.textContent);    by using textcontent we will see each and every thing writen on if it is not showing on webpage like hello is not printing on webpage but showing in console tab.
// mainHeading.textContent = "this is something else";          by this we can change the text in webpage.
// console.log(mainHeading.textContent);          

// INNER TEXT.
// const mainHeading =  document.getElementById("main-heading");
// console.log(mainHeading.innerText);  it will only show the printed text on the console .             



// TOPIC change the styles of elements 106.
// const mainHeading =  document.querySelector("div.headline h2");
// console.log (mainHeading.style);  by using style we can check each and every style givven to it.
// mainHeading.style.color = "blue";    by this we can change the color of defined part.
// mainHeading.style.backgroundColor = "blue";  this is how we can chage the styles..
// mainHeading.style.border = "20px solid green";
//  we can do manny more things using style.


// get an set attribute. 107.
// get attribute.
const link = document.querySelector("a");       // by using this "a" we will get the first anchor tag.
console.log(link.getAttribute("href"));         // by this method of getattribute we can get any anchor tag we want.

const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));

// SET/LINK ATTRIBUTE.

// link.setAttribute("href", "https://google.com");         this is how we can set and link any attribute.
// console.log(link.getAttribute("href"));


// get multiple elements using getElements by class name 108
// get multiple elements items using querySelectorAll
// const navItems = document.getElementsByClassName("nav-item"); // HTMLCollection giving return.
// console.log(navItems);
// console.log(Array.isArray(navItems));
// const navItems = document.querySelectorAll(".nav-item"); // NodeList  giving in return.
// console.log(navItems[1]);


// 109
// get multiple elements using getElements by class name 
// get multiple elements items using querySelectorAll
// array like object ---> indexing, length property 
// let navItems = document.getElementsByTagName("a"); // HTMLCollection
// console.log(navItems);
// we can't use forEach method to iterate through HTMLCollection
// simple for loop 
// for of loop 
// forEach 

// for(let i=0; i< navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";

// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })

// console.log(Array.isArray(navItems));
// const navItems = document.querySelectorAll(".nav-item"); // NodeList
// console.log(navItems[1]);

// let navItems = document.querySelectorAll("a");
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));
// simple for loop 
// for of loop 
// forEach 
// for(let i=0; i< navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";

// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })
// console.log(navItems);


// 110 
// innerHtML 
const headline = document.querySelector(".headline");
// console.log(headline.innerHTML);
// headline.innerHTML = "<h1>Inner html changed </h1>";
// headline.innerHTML += "<button class= \"btn\"> Learn More </button>" 
// console.log(headline.innerHTML);