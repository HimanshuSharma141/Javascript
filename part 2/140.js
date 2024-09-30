// xhr (xml http request).
const url = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest()
// console.log(xhr);
//  step 1 
// console.log(xhr.readyState);
xhr.open("GET",url);
// console.log(xhr.readyState);
// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         console.log(xhr);
//         const response = xhr.response;
//         const data = JSON.parse(response)
//         console.log(typeof data);
//     }
// }

// short trick of this upper commented code is.

xhr.onload = function(){                        // isme jo ready state h wo 4 hogyi h bina uppar wale code ki complixity ko hata kar.
    const response = xhr.response;
    const data = JSON.parse(response)
    console.log(data);
}

xhr.send();