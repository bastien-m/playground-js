const priorities = require('./priorities.json')
const path = require('path')
const fs = require('fs')

for (const priority of priorities) {
    let prioritySQL = 'INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)'
    prioritySQL += `
        SELECT uuid(), 1, ${priority.priority}, null,
        (SELECT \`id\` FROM ref_touch_point_source WHERE value = '${priority.activity_record_source}'),
        (SELECT \`id\` FROM ref_activity_type WHERE value = '${priority.activity_type}'); \n\n`
    console.log(priority)
    fs.appendFileSync(path.join(__dirname, 'priorities.sql'), prioritySQL);
}


