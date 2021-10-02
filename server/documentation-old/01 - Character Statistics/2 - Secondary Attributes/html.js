const { secondaryAttributes } = require('../../../data/attributes.js');


const secondaryAttributesHtml = Object.keys(secondaryAttributes).map(attribute => (
  `<p><b>${secondaryAttributes[attribute].displayName}</b></p><ul><li><b>Description: </b>${secondaryAttributes[attribute].description}</li><li><b>Base Value: </b>${secondaryAttributes[attribute].baseValue}</li></ul>`
));

const html = `<p>These statistics are derived from the character’s strain, primary attributes, and skills.</p>${secondaryAttributesHtml.join("")}`;


module.exports = html;
