// xhr practice and error handling
const url = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

xhr.open("GET", url);
xhr.onload = ()=>{
    if(xhr.status >= 200 && xhr.status < 300){
    const data = JSON.parse(xhr.response);
    console.log(data);
    }
    else{
        console.log("something went wrong");
    }
}

xhr.onerror =() =>{                      // jab kam ayega jab ek user ka network disconnected hoga.
    console.log("network error");
}
xhr.send();