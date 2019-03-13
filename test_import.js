const module_test = require('./module_test')

Promise.all(module_test(), module_test(), module_test())
    .then(() => {
        console.log('end')
    })


