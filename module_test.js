module.exports = function() {
    const ids = []

    return new Promise((resolve, reject) => {
        return new Promise((innerResolve, innerReject) => {
            ids.push(1)
            return innerResolve()
        })
        .then(() => {
            console.log(ids);
            return resolve()
        })
    })

}

