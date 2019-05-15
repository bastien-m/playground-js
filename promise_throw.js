

callMe = () => {
    return new Promise((resolve, reject) => {
        reject('toto')
    })
}

callMe().then(res => {

}, err => console.log(err + '0'))
.catch(err => console.log(err + '1'))



