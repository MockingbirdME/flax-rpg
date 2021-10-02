const { secondaryAttributes } = require('../../../data/attributes.js');


const secondarySkillHtml = Object.keys(secondaryAttributes).map(attribute => (
  `<p><b>${secondaryAttributes[attribute].displayName}</b></p><ul><li><b>Description: </b>${secondaryAttributes[attribute].description}</li><li><b>Base Value: </b>${secondaryAttributes[attribute].baseValue}</li></ul>`
));

const html = `<p>These statistics are derived from the character’s strain, primary attributes, and skills.</p>${secondarySkillHtml.join("")}`;


module.exports = html;
