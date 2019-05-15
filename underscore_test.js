const _ = require('underscore')

const priorities = [{
    priority: 4,
    pr_entity_id: null,
    name: 'first'
}, {
    priority: 2,
    pr_entity_id: null,
    name: 'second'
}, {
    priority: 3,
    pr_entity_id: null,
    name: 'third'
}];


get_priority = (pr_entity_id) => {
    return _.chain(priorities)
        .where({pr_entity_id: pr_entity_id})
        .first()
        .sortBy('priority')
        .value()

}

console.log(get_priority(null))


/**
 * Test order
 */


date_from_now = (day) => {
    let d = new Date();
    d.setDate(d.getDate() - day);
    return new Date(d);
}

console.log(date_from_now(1))
console.log(date_from_now(2))

const entries_unordered = [
    {
        date: date_from_now(6),
        priority: 1,
        type: 'profile-center'
    },
    {
        date: date_from_now(2),
        priority: 2,
        type: 'consumer'
    },
    {
        date: date_from_now(3),
        priority: 1,
        type: 'profile-center'
    },
    {
        date: date_from_now(1),
        priority: 1,
        type: 'profile-center'
    }
]


console.log(_(entries_unordered)
    .chain()
    .sortBy('date')
    .reverse()
    .sortBy('priority')
    .value())

