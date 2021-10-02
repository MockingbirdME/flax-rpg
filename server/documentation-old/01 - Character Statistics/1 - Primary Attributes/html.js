const { primaryAttributes } = require('../../../data/attributes.js');

let html = `<p>Character’s have four primary attributes that describe their physical and mental talents. Primary attributes play a key role in determining a character’s potential for success in various actions.<p>`;

Object.keys(primaryAttributes).forEach(attribute => {
  html += `<p><b>${attribute.charAt(0).toUpperCase() + attribute.slice(1)} - </b>${primaryAttributes[attribute].description}</p>`;
});

module.exports = html;
