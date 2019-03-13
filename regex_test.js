let pattern = /^[0-9]{4}-[0-1][0-9]-[0-3][0-9]( [0-2][0-9]:[0-5][0-9]:[0-5][0-9](\.[0-9][0-9][0-9]){0,1}){0,1}$/;

    //      2017-03-28
    //      2017-03-28 10:33:15
    //      2017-03-28 10:33:15.456

let value = '2017-03-28'
console.log(pattern.test(value))

value = '2017-03-28 10:33:15'
console.log(pattern.test(value))

value = '2017-03-28 10:33:15.456'
console.log(pattern.test(value))
