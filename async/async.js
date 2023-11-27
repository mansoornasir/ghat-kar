function one() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Load")
            resolve(true);
        }, 5000)
    })
}

function two() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Sort")
            resolve(true);
        }, 3000)
    })
}

function three() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Print")
            resolve(true);
        }, 2000)
    })
}

// Promises
// one().then(() => {
//     two().then(() => {
//         three().then(() => {
//             console.log("Done")
//         })
//     })
// })

// Await Async

async function run() {
    await one();
    await two();
    await three();
}

run();
