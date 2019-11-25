// async/await 是 Promise 的语法糖

// const result = async function() {
//     var content = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(6);
//         }, 500)
//     })
//     console.log(content);
//     return 4;
// }()

// setTimeout(() => {
//     console.log(result)
// }, 800)

// interview
var loopInterview = async function() {
    try {
        await interview(1);
        await interview(2);
        await interview(3);
    } catch(e) {
        return console.log('err', e)
    }
    console.log('success')
}

function interview(round) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if( Math.random() < 0.8 ) {
                resolve(round);
            } else {
                reject(new Error(round));
            }
        }, 500);
    })
}

loopInterview();