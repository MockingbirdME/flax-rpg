let data = require('../../../data/traits.js');

let html = '<ul class="rules_list traits_list">';

for (let key in data) {
    let trait = data[key];
    if (trait.type !== "General") continue;


    let reqs = trait.requirements && trait.requirements.length ? `<p><b>Requirements: </b>${trait.requirementsDescription}</p>` : "";
    let description = `<p>`;
    description += `${trait.description}</p>`;

    html += `
        <li id="${key}">
            <h4>${trait.displayName}</h4>
            ${reqs}
            ${description}
        </li>
    `;

}





html += '</ul>';

module.exports = html;
