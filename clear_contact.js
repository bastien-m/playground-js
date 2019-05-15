const _ = require('underscore');

const tables = require('./authorized-fields.json');

 /**
 * Clear the contact from useless informations to
 * transfer to the profilecenter
  * @param {object} full data of a contact
  */
 module.exports = function(contact) {
    let contact_minified = {}
    const keys = _.keys(tables) 
    _.each(keys ,table => {
        // parent node
        if (table === 'contact') {
            contact_minified = retrieve_allowed_field([contact], tables[table])[0];
        } else {
            const table_name = tables[table].name;
            contact_minified[table_name] = retrieve_allowed_field(contact[table], tables[table]);
        }
    });

    return contact_minified;
}

/**
 * This object contains informations about what field to retrieved
 * and conditions about filter. For example, on identifier we must skip
 * the record about wechat
 */


/**
 * This function filter value from the whole contact using informations stored in tables object
 * @param {object} values contact value for this specific field
 * @param {array} table_definitions contains informations about filters and columns retrieved
 * @return {array} an array for this field with every required informations
 */
function retrieve_allowed_field(values, table_definitions) {
    console.log(table_definitions.name)
    let response = [];
    _.each(values, (value, index, list) => {
        console.log(index);
        if (table_definitions.conditions && table_definitions.conditions.length > 0) {
            _.each(table_definitions.conditions, condition => {
                // if there is a filter condition and this condition is true
                // then skip the current value
                if (!condition.filter || value[condition.column] !== condition.value) {
                    response[index] = {};
                    _.each(table_definitions.fields, field => {
                        if (typeof field === 'object') {
                            response[index][field.to] = value[field.from];
                        } else {
                            response[index][field] = value[field];
                        }
                    })
                }
            })
        } else {
            response[index] = {};
            _.each(table_definitions.fields, field => {
                if (typeof field === 'object') {
                    response[index][field.to] = value[field.from];
                } else {
                    response[index][field] = value[field];
                }
            })
        }

    });
    return response;
}
