//  fetch APIs.

const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url , {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }, })
.then(Response => {
    if(Response.ok){
    return Response.json()
    }else{
        throw new error("somthig wehnt wrong!!");
    }
})
.then(data =>{
    console.log(data);
})
.catch(error =>{
    console.log("inside catch");
    console.log(error);
})