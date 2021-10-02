const backgrounds = require('../../../data/backgrounds');

const backgroundsListHtml = Object.keys(backgrounds).map(backgroundKey => {
  const {displayName, tags, description, luck, stamina, willpower, startingWealth, focusedSkills, relatedSkills, traitsOptional} = backgrounds[backgroundKey];

  return `<li><p><b>${displayName}</b></p><ul><li><b>Tags: </b>${tags.join(", ")}</li><li><b>Description: </b>${description}</li><li><b>Attributes: </b>Luck: ${luck}, Stamina: ${stamina}, Willpower: ${willpower}</li><li><b>Starting Wealth: </b>${startingWealth}</li><li><b>Focused Skill(s): </b>${focusedSkills}</li><li><b>Related Skills: </b>${relatedSkills}</li><li><b>Optional Traits: </b>${traitsOptional}</li></ul></li>`;
});

const html = `<div><h3>Backgrounds:</h3><ul>${backgroundsListHtml.join("")}</ul></div>`;

module.exports = html;
