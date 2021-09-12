/* eslint-disable complexity */
// const utils = require('../lib/trait_utils');

const traitsData = {
  hardToKillPlotArmor: {
    displayName: "Hard to Kill, Plot Armor",
    type: "General",
    requirements: [],
    requirementsDescription: "",
    keywords: ["Epic"],
    description:
      "Once per scene per instance of this trait the character has they may spend their reaction to suffer no damage from one attack. The controlling player may decide to use this ability after they know the damage the character would take.",
    isCharacterEligible: () => true,
    apply: character => character.addTraitAsNote({traitName: 'hardToKillPlotArmor'})
  },
  heroicAttribute: {
    displayName: "Heroic Attribute",
    type: "General",
    requirements: [],
    requirementsDescription: "",
    keywords: ["Epic"],
    description:
      "One of the character's primary attribute's is increased by one. This can not increase any trait to higher than 3 plus the strains racial adjustment to that attribute.",
    options: (character, selectedOptions = {}) => {
      const options = [];
      const {primaryAttributes} = character;

      const eligibleAttributes = Object.keys(primaryAttributes).filter(attributeName => primaryAttributes[attributeName] < 3 || attributeName === selectedOptions.primaryAttribute);

      options.push({id: "primaryAttribute", displayName: "Attribute", type: "attribute", options: eligibleAttributes});

      return options;
    },
    isCharacterEligible: character => Object.keys(character.primaryAttributes).filter(attributeName => character.primaryAttributes[attributeName] < 3).length > 0,
    apply: (character, options = {}) => {
      const {primaryAttribute} = options;

      if (!primaryAttribute) return;
      // TODO validate that options are valid choices.
      character.modifyAttribute(primaryAttribute, +1);
    }
  },
  arcaneFont: {
    displayName: "Arcane Font",
    type: "Mage",
    requirements: ["Dependent Mage", "Learned Mage", "Natural Mage"],
    requirementsDescription: "Dependent Mage, Learned Mage, or Natural Mage.",
    keywords: ["Heroic"],
    description:
      "Before making a skill check for casting a spell, gathering arcane energy, or crafting arcane energy the caster may choose to add their body, along with their mind, to the skill check; if they do so they lose stamina equal to twice their body stat, if positive, before making the affected skill check."
  },
  cantripCasterSpeedy: {
    displayName: "Cantrip Caster, Speedy",
    type: "Mage",
    requirements: ["Dependent Mage", "Learned Mage", "Natural Mage"],
    requirementsDescription: "Dependent Mage, Learned Mage, or Natural Mage.",
    keywords: ["Heroic"],
    description:
      "The first cantrip the character casts each turn does not count against the limit of one magic action per turn."
  },
  dependentMage: {
    displayName: "Dependent Mage",
    type: "Mage",
    requirements: ["No other mage traits"],
    requirementsDescription: "No other mage traits",
    keywords: ["Heroic"],
    description: `The character is a dependent mage gaining the following benefits:
        <ul>
        <li>They can know up to two spells.</li>
        <li>When they gain their first rank in an arcane theme they gain access to a single arcane power associated with that theme<li>
        <li>They gain access to any cantrips or passive abilities associated with powers they have access to and themes they have at least one rank in.<li>
        <li>They can have ranks in no more than one plus their ranks in magical aptitude arcane arcane theme secondary skills.</li>
        <li>They suffers one penalty die to all skill checks to cast spells, gather, or shape arcane energy if they have not consumed arcane essence in the last 8 hours.</li>
        <li>They cannot make skill checks to cast spells, gather, or shape arcane energy if they have not consumed arcane essence in the last 24 hours.</li>
        <li>They cannot cast cantrips if they have not consumed arcane essence in the last span of days.</li>
        </ul>`
  },
  dependentMageExpandedPowers: {
    displayName: "Dependent Mage, Expanded Powers",
    type: "Mage",
    requirements: ["Dependent Mage"],
    requirementsDescription: "Dependent Mage",
    keywords: ["Simple"],
    description:
      "The character chooses one arcane theme secondary skill that they have at least one rank in, they gain access to one additional power associated with that theme."
  },
  expandedSpellList: {
    displayName: "Expanded Spell List",
    type: "Mage",
    requirements: ["Dependent Mage", "Learned Mage", "Natural Mage"],
    requirementsDescription: "Dependent Mage, Learned Mage, or Natural Mage.",
    keywords: ["Simple"],
    description:
      "This trait may be taken any number of times, each time it is taken the character increases the number of spells they know by one."
  },
  learnedMage: {
    displayName: "Learned Mage",
    type: "Mage",
    requirements: ["No other mage traits, at least rank one in both the discipline and magical aptitude skills."],
    requirementsDescription:
      "No other mage traits, at least rank one in both the discipline and magical aptitude skills.",
    keywords: ["Simple"],
    description: `The character is a learned mage gaining the following benefits:
        <ul>
        <li>They can know up to two spells.</li>
        <li>They gains access to two arcane theme secondary skills, those skills cannot be above rank one and cannot be increased beyond rank one.</li>
        <li>They gain access to any cantrip associated with any arcane theme or power they have access to.<li>
        <li>They gain access to learned mage specific arcane effects.</li>
        </ul>`
  },
  learnedMageAdvancedLearning: {
    displayName: "Learned Mage, Advanced Learning",
    type: "Mage",
    requirements: ["Learned Mage"],
    requirementsDescription: "Learned Mage",
    keywords: ["Simple"],
    description:
      "The character chooses one arcane theme secondary skill they have access to, that skill can be increased by one rank (Note: this trait does not increase the rank of the selected skill, it only allows other traits/effects to increase it)."
  },
  learnedMageExpandedLearning: {
    displayName: "Learned Mage, Expanded Learning",
    type: "Mage",
    requirements: ["Learned Mage"],
    requirementsDescription: "Learned Mage",
    keywords: ["Heroic"],
    description:
      "The character gains access to one arcane theme secondary skill that skill cannot be above rank one and cannot be increased beyond rank one."
  },
  learnedMageInternalizedLearning: {
    displayName: "Learned Mage, Internalized Learning",
    type: "Mage",
    requirements: ["Learned Mage"],
    requirementsDescription: "Learned Mage",
    keywords: ["Heroic"],
    description:
      "The character chooses one arcane theme secondary skill they have access to, they gain access to any passive abilities associated with that theme or any of its powers."
  },
  naturalMage: {
    displayName: "Natural Mage",
    type: "Mage",
    requirements: ["No other mage traits"],
    requirementsDescription: "No other mage traits",
    keywords: ["Heroic"],
    description: `The character is a natural mage gaining the following benefits:
      <ul>
      <li>They can know up to two spells.</li>
      <li>They choose one arcane theme secondary skill to be be their primary arcane theme.</li>
      <li>They gain access to their primary arcane theme secondary skill and treat this secondary skill as being two ranks higher than it actually is.</li>
      <li>They gain access to any cantrips associated with their primary arcane theme or any of its powers</li>
      <li>They gain access to any passive abilities associated with any arcane theme or power they have access to.<li>
      </ul>`
  },
  naturalMageExpandedPowers: {
    displayName: "Natural Mage, Expanded Powers",
    type: "Mage",
    requirements: ["Natural Mage"],
    requirementsDescription: "Natural Mage",
    keywords: ["Simple"],
    description:
      "The character chooses one arcane theme secondary skill that has at least one power available to it the caster already has access to, they gain access to that arcane theme, that secondary skill cannot be above rank one and cannot have its rank increased beyond one."
  },
  sneakySpellCaster: {
    displayName: "Sneaky Spell Caster",
    type: "Mage",
    requirements: ["Dependent Mage, Learned Mage, or Natural Mage."],
    requirementsDescription: "Dependent Mage, Learned Mage, or Natural Mage.",
    keywords: ["Heroic"],
    description:
      "This trait may be taken any number of times. Reduce the cost of component effects the caster adds to spells and cantrips by one per instance of this trait they have; this can not reduce an effect's arcane cost below zero."
  },
  multiAttack: {
    displayName: "Multi-Attack",
    type: "Combat",
    requirements: ["custom"],
    requirementsDescription: "",
    keywords: ["Heroic"],
    description:
      "The first time the character would receive a penalty die to an attack skill check as a result of their multi-attack penalty reduce that penalty by one.",
    isCharacterEligible: character => !character.traits.some(trait => trait.id === 'multiAttack'),
    apply: character => {
      character.addNote({name: 'Multi-Attack', description: `The first time the character would receive a penalty die to an attack skill check as a result of their multi-attack penalty reduce that penalty by one.`});
    }
  }
};


module.exports = traitsData;
