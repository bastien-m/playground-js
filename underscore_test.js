const _ = require('underscore')

const fields = {
    contact: ['a', 'b'],
    personal_interest: ['c', 'd']
};

function flat (obj) {
    // console.log('FLAT of',obj);
    var res = {};
    var i,j,sub,sep;
    if (obj === null || obj === undefined) {
        res = obj;
    } else if ( Array.isArray(obj) ) {
        for (i = 0; i < obj.length ; i++) {
            sub = flat(obj[i]);
            if (sub === null) { // typeof null === object
                res['['+i+']'] = sub;
            } if ((typeof sub) === "object") {
                for (j in sub) {
                    if (sub.hasOwnProperty(j)) {
                        sep = (j[0] === '[') ? '': '.';
                        res['['+i+']'+sep+j] = sub[j];
                    }
                }
            } else {
                res['['+i+']'] = sub;
            }
        }
    } else if ((typeof obj) === "object") {
        if (Object.keys(obj).length === 0) {
            //res = '';
            res = {};
        } else {
            for (i in obj) {
                if (obj.hasOwnProperty(i)) {
                    sub = flat(obj[i]);
                    if (sub === null) { // typeof null === object
                        res[i] = sub;
                    } else if ((typeof sub) === "object") {
                        if (Object.keys(sub).length === 0) {
                            res[i] = sub;
                        }else{
                            for (j in sub) {
                                if (sub.hasOwnProperty(j)) {
                                    sep = (j[0] === '[') ? '': '.';
                                    res[i+sep+j] = sub[j];
                                }
                            }
                        }
                    } else {
                        res[i] = sub;
                    }
                }
            }
        }
    } else {
        res = obj;
    }
    // console.log('RETURN ',res);
    return res;
}

function getValueByString(obj, str) {
    var a = str.split('.');
    for (var j = 0; j < a.length; j++) {
        var p = a[j].indexOf('[');
        if ( p !== -1 ) {
            var integer = parseInt(a[j].substr(p+1));
            a.splice(j+1,0,integer);
            a[j] = a[j].substr(0,p);
            j++;
        }
    }
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (obj && k in obj) {
            obj = obj[k];
        } else {
            return undefined;
        }
    }
    return obj;
}

const contact = {
    a: 'me',
    b: 'you',
    c: 'us',
    personal_interest: [
        {
            c: 'bastien',
            d: 'mercier'
        },
        {
            c: 'me',
            d: 'you'
        }
    ]
}

// console.log(flat(contact))

// console.log(getValueByString(contact, 'personal_interest[0].c'))

// console.log(_.pick(contact, 'personal_interest[].c'))

// console.log(_.isArray([1,2,3]));

// _.pick(contact, (value, key, object) => {
//     console.log(value);
//     console.log(key);
//     console.log(_.isArray(value));
//     return true;
// })


console.log(_.keys({a: 'me', b: 'you'}))

const entry = {
    address: [
        { entry_id: '1', city: 'paris' },
        { entry_id: '2', city: 'amsterdam' }
    ]
}

_.each(entry.address, address => {
    if (address.entry_id === '1') {
        address = null;
    }
})

console.log(entry.address);


console.log(_.range(0,10,2))

_.map(_.range(0,10,2), (range, packet, ranges) => {
    console.log(`${range} ${packet}`);
    console.log(ranges)
})
