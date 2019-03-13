Promise.all([1,2,3,4].map(v => {
    return new Promise((resolve, reject) => {
        if (v === 3) {
            reject('something went wrong')
        } else {
            resolve(v)
        }
    })
}))
.then(value => {
    console.log(value)
})
.catch(err => {
    console.log(err)
})


new Promise((resolve, reject) => {
    resolve()
})
.then(() => {
    console.log('here')
}, () => {
    console.log('there')
})



Promise.resolve('success -1')
    .then(() => Promise.reject('error 0'))
    .then(() => Promise.resolve('success 2'))
    .catch(err => console.log(err))


const first$ = () => {
    console.log('execute function first')
    return Promise.resolve('first')
}
const second$ = () => {
    console.log('execute function second')
    return Promise.resolve('first')
}
const error$ = () => {
    console.log('execute function error')
    return Promise.resolve('error')
}

Promise.all([first$, error$, second$])
    .then(() => console.log('success'))
    .catch(err => console.log(err))

