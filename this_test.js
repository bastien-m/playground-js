function first () {
    var a = 10
    console.log(this.b)
}


function second () {
    console.log(this.b)
    first()
    console.log(this.a)
    return this.a + this.b
}

var b = 2
var a = 1

console.log(second())

const res = second.bind({b})()

console.log(res)
