const { resourceAttributes } = require('../../../data/attributes.js');


const resourceAttributesHtml = Object.keys(resourceAttributes).map(attribute => (
  `<p><b>${resourceAttributes[attribute].displayName}</b></p><ul><li><b>Description: </b>${resourceAttributes[attribute].description}</li><li><b>Uses: </b>${resourceAttributes[attribute].uses}</li><li><b>Base Value: </b>${resourceAttributes[attribute].baseValue}</li></ul>`
));

const html = `<p>These resources statistics are derived from the character’s attributes, backgrounds, skills, and traits.</p>${resourceAttributesHtml.join("")}`;


module.exports = html;
