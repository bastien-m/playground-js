const { readFileSync, readdirSync, lstatSync, writeFileSync } = require('fs')
const path = require('path')
const _ = require('lodash')

const data = readFileSync('data.json')
const json = JSON.parse(data)
const root = 'files'

const browse_directory = (_path) => {
    readdirSync(_path)
        .forEach(link => {
            const current_file = path.join(_path, link);
            if (lstatSync(current_file).isDirectory()) {
                browse_directory(current_file)
            } else {
                if (has_string_length(current_file)) {
                    console.log(`${current_file} already has string_length set`)
                } else {
                    const content = JSON.parse(readFileSync(current_file))
                    if (get_string_constraint(content)) {
                        const property = get_property(current_file, root)
                        const new_content = edit_file(content, property)
        
                        const new_filename = `${current_file}-new.json`
                        writeFileSync(new_filename, JSON.stringify(new_content, null, '\t'))
                    } else {
                        console.log(`${current_file} has no string constraint`)
                    }
                }
            }
        })
}

const get_property = (filename, root) => {
    const property_name = get_property_name(filename, root)
    if (_.get(json, property_name)) {
        return _.get(json, property_name)
    }
    return null
}

const edit_file = (content, property) => {
    const string_constraint = get_string_constraint(content)
    if (string_constraint) {
        let new_surface = []
        if (string_constraint.surface) {
            new_surface.push(string_constraint.surface)
        }
        new_surface.push('string_length')
        string_constraint.surface = new_surface
        string_constraint['string_length'] = property
        remove_constraint(content, 'string')
        add_constraint(content, string_constraint)
    }
    return content
}

const remove_constraint = (content, constraint_name) => {
    const constraint = content.constraint.filter(c => c.datatype !== 'string')
    return content.constraint = constraint;
}

const add_constraint = (content, new_contraint) => {
    content.constraint.push(new_contraint)
    return content
}

const get_string_constraint = (content) => {
    return content.constraint.find(c => c.datatype === 'string')
}

const has_string_length = (filename) => {
    const content = JSON.parse(readFileSync(filename))
    const constraint = content.constraint.find(c => c.datatype === 'string')
    return constraint && constraint.surface === 'string_length'
}

const get_property_name = (filename, root) => {
    const property_name = filename.replace('.json', '')
        .replace(root + path.sep, '')
        .split(path.sep)
        .join('.')

    return property_name
}

browse_directory('files')
