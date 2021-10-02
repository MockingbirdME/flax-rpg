const { secondaryAttributes } = require('../../../data/attributes.js');

let html = `<p>These statistics and resources are derived from the character’s strain, primary attributes, and skills.</p>`;

Object.keys(secondaryAttributes).forEach(attribute => {
  html += `<p><b>${secondaryAttributes[attribute].displayName}</b></p><ul><li><b>Description: </b>${secondaryAttributes[attribute].description}</li><li><b>Base Value: </b>${secondaryAttributes[attribute].baseValue}</li></ul>`;
});

module.exports = html;
