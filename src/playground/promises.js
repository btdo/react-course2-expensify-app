const promise = new Promise ((resolve,reject) => {
    setTimeout(() => {
        reject('something went wrong');
    }, 5000);    
})

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('error:', error);
})