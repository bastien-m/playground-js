const _ = require('underscore')

let u0 = {
    firstname: 'f0',
    lastname: 'l0'
};

let u1 = {
    firstname: 'f1',
    lastname: 'l1'
};

const doc = {
    entry: [u0, u1]
}

const entries = doc.entry;

const copyFirst = entries.shift()
console.log(entries.length)

console.log(doc.entry.length)

const entry = [u0, u1, u0]

const n = _.rest(entry)

console.log(n)
console.log(n.length)
console.log(entry)
console.log(entry.length)


