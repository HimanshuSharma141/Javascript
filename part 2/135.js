// function returing promise.

function ricePromise(){
    const bucket = ['coffe','chips','vegies','rice','salts'];
    return new Promise((resolve,reject)=>{
        if(bucket.includes("vegies")&& bucket.includes("salt")&& bucket.includes("rice")){
            resolve({value:"friedrice"});
        }else{
            reject("could not eat it")
        }
    })
}


ricePromise().then(
    //jab promise resolve hoga
    (myFriedRice)=>{
        console.log("lets eat",myFriedRice);
        }
).catch(
    (error)=>{
        console.log(error);
    }
)
