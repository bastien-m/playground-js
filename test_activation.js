const _ = require('underscore')

function filter_activation(activations) {
    debugger;
    let filtered_activation = [];
    let in_error = [];
    activation_group_by_contact = _.groupBy(activations, a => a.contact_id);
    _.each(activation_group_by_contact, activations_grouped => {
        let sum = {};
        let valid = true;
        _.each(activations_grouped, a => {
            if (a.row_type === 'clean' || a.row_type === 'sync') {
                if (sum[a.ecrm_tool_db_id]) {
                    sum[a.ecrm_tool_db_id]++;
                    if (sum[a.ecrm_tool_db_id] > 1) {
                        valid = false;
                    }
                } else {
                    sum[a.ecrm_tool_db_id] = 1;
                }
            }
        });
        if (valid) {
            filtered_activation = filtered_activation.concat(activations_grouped);
        } else {
            in_error = in_error.concat(activations_grouped);
        }
    });
    return {ok: filtered_activation, ko: in_error};
}

// ok, should return all activations
let activations = [
    {
        contact_id: 1,
        row_type: 'clean',
        ecrm_tool_db_id: 1
    },
    {
        contact_id: 1,
        row_type: 'clean',
        ecrm_tool_db_id: 2
    },
    {
        contact_id: 2,
        row_type: 'clean',
        ecrm_tool_db_id: 1
    }
]

console.log('length === 3')
console.log(filter_activation(activations).ok.length);

// duplication, should return only one activations
activations = [
    {
        contact_id: 1,
        row_type: 'clean',
        ecrm_tool_db_id: 1
    },
    {
        contact_id: 1,
        row_type: 'clean',
        ecrm_tool_db_id: 1
    },
    {
        contact_id: 2,
        row_type: 'clean',
        ecrm_tool_db_id: 1
    }
]

console.log('length === 1')
console.log(filter_activation(activations).ok.length);
console.log(filter_activation(activations).ko.length);