const marked = require('marked');
const fs = require('fs');
const path = require('path');

const html = marked(fs.readFileSync(path.resolve(__dirname, '../../documentation/Hits_&_Damage.md'), 'utf8'));

module.exports = html;
