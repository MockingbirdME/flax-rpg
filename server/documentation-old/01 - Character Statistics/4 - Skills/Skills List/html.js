const data = require('../../../../data/skills.js');

const skillsHtml = Object.keys(data).map(skillKey => {
  const { displayName, description, secondarySkills } = data[skillKey];
  const secondarySkillsHtml = Object.keys(secondarySkills).map(secondarySkillKey => {
    const {displayName, description} = secondarySkills[secondarySkillKey];
    return `<li><b>${displayName} - </b>${description}</li>`;
  });

  return `<div class="skillList__${skillKey}"><h4>${displayName}</h4><p>${description}</p><p><b>Secondary Skills:</b></p><ul>${secondarySkillsHtml.join("")}</ul></div>`;
});

const returnHtml = `<div class="rules_list">${skillsHtml.join("")}</div>`;

module.exports = returnHtml;
