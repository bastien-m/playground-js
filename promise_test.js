const get_country = () => {
    return new Promise((resolve, reject) => {
        resolve({
            code: 'FR', 
            value: 'France'
        })
    })
}


const promises = [1,2,3].map(val => {
    return get_country(val)
        .then(country => {
            console.log(country)
            return Promise.resolve(country.value)
        })
})

Promise.all(promises)
    .then(res => console.log(res))

