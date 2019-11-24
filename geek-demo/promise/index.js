(function() {
    var promise = new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve('result');
        }, 300)
        // setTimeout(() => {
        //     reject(new Error('reject'));
        // }, 500)
    }).then((res) => {
        console.log(res)
        return 'promise then'
    }).catch((err) => {
        console.log(err)
        return 'promise catch'
    })
    
    console.log(promise)
    
    // setTimeout(() => {
    //     console.log(promise)
    // }, 800);
})()