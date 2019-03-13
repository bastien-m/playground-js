const moment = require('moment')

const oldDate = moment();

const start = moment().subtract(10, 'seconds')
const end = moment().add(10, 'seconds')

console.log(moment(oldDate).toDate())
console.log(moment(start).toDate())
console.log(moment(end).toDate())

console.log(oldDate.isBetween(start, end))

let now = new Date()
now = now.getTime() / 1000;

let start1 = new Date()
start1 = (start1.getTime() - 5000)/ 1000

let end1 = new Date()
end1 = (end1.getTime() + 5000)/ 1000

if (now < end1 && now > start1) {
    console.log('between')
}

console.log((new Date('2018-10-24 12:12:05')).toISOString())
console.log((new Date()).toISOString().getTime())
