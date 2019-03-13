const { readdirSync, lstatSync, unlinkSync } = require('fs')
const path = require('path')

const root = 'files'

const browse = (root) => {
    readdirSync(root)
        .forEach(link => {
            const current_file = path.join(root, link)
            if (lstatSync(current_file).isDirectory()) {
                browse(current_file)
            } else {
                if (current_file.indexOf('-new.json') > 0) {
                    console.log(`${current_file} deleted`)
                    unlinkSync(current_file)
                }
            }
        })
}

browse(root)