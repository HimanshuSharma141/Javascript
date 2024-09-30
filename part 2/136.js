// promise && settimeout



// i want to resolve / reject promise after 2 seconds.


function myPromise(){
    const value = false;
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(value){
                resolve();
            }else{
                reject();
            }
        },2000)
    })
}

myPromise()
.then(()=>{console.log("resolevd")})
.catch(()=>{console.log("rejected")})

// ajax basic theory se phle wapise recap karna padega.