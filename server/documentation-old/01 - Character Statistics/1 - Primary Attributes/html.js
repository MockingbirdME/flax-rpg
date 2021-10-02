const { primaryAttributes } = require('../../../data/attributes.js');

const primaryAttributesHtml = Object.keys(primaryAttributes).map(attribute => (
  `<p><b>${attribute.charAt(0).toUpperCase() + attribute.slice(1)} - </b>${primaryAttributes[attribute].description}</p>`
));

const html = `<p>Character’s have four primary attributes that describe their physical and mental talents. Primary attributes play a key role in determining a character’s potential for success in various actions.<p> ${primaryAttributesHtml.join("")}`;

module.exports = html;
