// const allButton = document.querySelectorAll(".my-buttons button");
// console.log(allButton);
// firstButton.addEventListener("click" , function(){
//     console.log("you clicke me");
// } );



// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         console.log(this);
//     })
// }

// for(let i = 0 ; i< allButtons.length; i++){                      simple for loop method.
//     allButtons[i].addEventListener("click", function(){
//         console.log(this);
//     })
// }
// allButtons.forEach(function(button){                 (this is for each loop method )          this all are the different ways of applying to the events. 
//     button.addEventListener("click", function(){
//         console.log(this);
//         });
// })




// file no123.
// event object 

// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function(event){      
//     console.log(event);
// })


// jab bhi mai kisi bhi element pe event listner add hoga
// js Engine --- line by line execute karta hai 
// browser ---- js Engine + extra features 
// browser ----- js Engine + WebApi

// jab browser ko pata chala ki user ne event perform kia 
// jo hum listen kar rahe hai 
// browser ----- 2 
// 1.) callback function hai vo js Engine ko degi ...... 
// 2.)  callback function ke sath browser jo event hua hai uski information bhi dega
// ye info hamein ek object ke form mai milegi 

// const allButton = document.querySelectorAll(".my-buttons button");


// for(let button of allButton){
//         button.addEventListener("click",(e)=>{
//             console.log(e.currentTarget);
//         })
//     }


    // file no. 124
    // events behind the scenes.
    //  isme hum log ecnet ko delay karege jise output thoda late ho ke aaaye.
// console.log("script start");
// const allButton = document.querySelectorAll(".my-buttons button");

// allButton.forEach((button) =>{
//     button.addEventListener("click", (e)=>{
//         let num =0;
//         for(let i =0; i<=1000000000; i++){
//             num += i;
//         }
//         console.log(e.currentTarget.textContent,num );
//     })
// })

// let outerVat = 0;
// for(let i=0; i<=100000000; i++){
//     outerVat+= i;
// }
// console.log("value of outer variable is",outerVat);
// console.log("script ends");


// file no 125.
// little practice with click events.
// isme apne ko clickevents ka use kar ke button ko click karne ke baad color chnage karna h.


const allButtons = document.querySelectorAll(".my-buttons button")
// console.log(allButtons.length);

allButtons.forEach(button =>{
        button.addEventListener("click",(e)=>{
            // console.log(e.target);
            e.target.style.backgroundColor = "yellow";
            e.target.style.color = "#333";
        })
})