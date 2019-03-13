const obj = [{
    values: [
        { row_state: 'inactive', label: 'Finland'},
        { row_state: 'active', label: 'France'}
    ]
}]


const res = obj[0].values = obj[0].values.filter(l => l.row_state === 'active')
console.log(res)


console.log("Hello".toLocaleLowerCase() === 'hello')