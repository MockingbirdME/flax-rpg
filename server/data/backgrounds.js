/*
  Backgrounds each provide:
  - stamina/willpower/luck points. These are kind of like the gain stamina/willpower/luck traits under the hood, with luck costing 2 trait points, but they cannot be later traded out for other traits at level up.
  - Starting Wealth (This needs work)
  - gain two Skill Training traits with a chosen focus skill.
  - gain two Skill Training traits with a chosen related skill the character is not yet proficient in, if they are proficient in each related skill they may choose to put two ranks into any skill they are not yet proficient in.
  - traitsOptional: list of traits a character with this background can choose amungst. For all backgrounds, Skilled Training for Focused Skills and Related Skills are always options. When a character takes this background they gain 3 of the listed traits.
*/

/*
exampleKey: {
  displayName: "",
  tags: [],
  description: "",
  luck: 0,
  stamina: 0,
  willpower: 0,
  startingWealth: 0,
  focusedSkills: [],
  relatedSkills: [],
  traitsOptional: []
},
*/

const backgrounds = {

  athlete: {
    displayName: "Athlete",
    tags: [],
    description: "",
    luck: 0,
    stamina: 5,
    willpower: 0,
    startingWealth: 0,
    focusedSkills: ["personal movement", "physical conditioning"],
    relatedSkills: ["discipline", "melee combat", "personal defense", "personal movement", "physical conditioning"],
    traitsOptional: ["Determined", "Healthy"]
  },
  berserker: {
    displayName: "Berserker",
    tags: [],
    description: "",
    luck: 1,
    stamina: 3,
    willpower: 0,
    startingWealth: 0,
    focusedSkills: ["melee combat", "personal movement"],
    relatedSkills: ["awareness", "melee combat", "personal movement", "physical conditioning", "survival"],
    traitsOptional: ["Fueled by Pain", "Reckless Attacker"]
  },
  charlatan: {
    displayName: "Charlatan",
    tags: [],
    description: "Snake oil salesmen, false prophets, courtiers, and polititians are all likely to have this background.",
    luck: 2,
    stamina: 0,
    willpower: 1,
    startingWealth: 0,
    focusedSkills: ["alchemy", "discipline"],
    relatedSkills: ["alchemy", "craft (artist)", "discipline", "knowledge (lore)", "legerdemain", "stealth"],
    traitsOptional: ["Determined"]
  },
  criminal: {
    displayName: "Criminal",
    tags: [],
    description: "",
    luck: 1,
    stamina: 1,
    willpower: 2,
    startingWealth: 0,
    focusedSkills: ["awareness", "legerdemain"],
    relatedSkills: ["awareness", "legerdemain", "performance", "personal movement", "stealth"],
    traitsOptional: ["Danger Sense"]
  },
  cultist: {
    displayName: "Cultist",
    tags: [],
    description: "There are many cults on Flax dedicated to some dweller, ohma, or immortal or another and even a few that follow individuals they believe to be some fabled hero. Cults provide vital services to the towns of Flax often supplying much needed story telling and medical attention to the populace.",
    luck: 0,
    stamina: 0,
    willpower: 5,
    startingWealth: 0,
    focusedSkills: ["knowledge (lore)", "medicine"],
    relatedSkills: ["alchemy", "craft (artist)", "knowledge (academics)", "knowledge (lore)", "medicine"],
    traitsOptional: ["Linguist"]
  },
  doctor: {
    displayName: "Doctor",
    tags: [],
    description: "",
    luck: 1,
    stamina: 0,
    willpower: 3,
    startingWealth: 0,
    focusedSkills: ["medicine"],
    relatedSkills: ["alchemy", "discipline", "knowledge (academics)", "survival"],
    traitsOptional: ["Hardy", "Linguist"]
  },
  duelist: {
    displayName: "Duelist",
    tags: [],
    description: "",
    luck: 2,
    stamina: 1,
    willpower: 0,
    startingWealth: 0,
    focusedSkills: ["melee combat", "personal defense"],
    relatedSkills: ["awareness", "legerdemain", "melee combat", "personal defense", "ranged combat"],
    traitsOptional: ["Duelist", "Quick Draw"]
  },
  entertainer: {
    displayName: "Entertainer",
    tags: [],
    description: "Actors, orators, musicians, street magicians and the like are all various forms of performers that can be found in any large city or traveling show.",
    luck: 0,
    stamina: 2,
    willpower: 3,
    startingWealth: 0,
    focusedSkills: ["craft (artist)", "performance"],
    relatedSkills: ["animal handling", "craft (artist)", "legerdemain", "performance", "physical conditioning"],
    traitsOptional: ["Fast Reflexes", "Linguist"]
  },
  gambler: {
    displayName: "Gambler",
    tags: [],
    description: "A gambler is someone who has a history of taking risks, they might be a scoundral who is most at home playing cards in some tavern basement, a merchant who puts his fortune on the line to make more money, or an acrobat who performs ever more daring feats without a proper safety net.",
    luck: 2,
    stamina: 0,
    willpower: 1,
    startingWealth: 0,
    focusedSkills: ["legerdemain", "knowledge (lore)"],
    relatedSkills: ["awareness", "knowledge (lore)", "legerdemain", "performance", "stealth"],
    traitsOptional: []
  },
  hunter: {
    displayName: "Hunter",
    tags: [],
    description: "Those who have experience capturing or killing creatures regardless of method. A hunter may use traps to protect their farm, a bow feed their family, or their own wits to bring in criminals with bounties on their heads.",
    luck: 1,
    stamina: 2,
    willpower: 1,
    startingWealth: 0,
    focusedSkills: ["survival", "stealth"],
    relatedSkills: ["animal handling", "personal movement", "craft (woodworker)", "survival", "stealth", "ranged combat"],
    traitsOptional: ["Ambusher", "Determined"]
  },
  laborer: {
    displayName: "Laborer",
    tags: [],
    description: "",
    luck: 0,
    stamina: 5,
    willpower: 0,
    startingWealth: 0,
    focusedSkills: ["animal handling", "craft (cooking)", "craft (mason)", "craft (woodworker)", "physical conditioning"],
    relatedSkills: ["animal handling", "craft (cooking)", "craft (mason)", "craft (woodworker)", "physical conditioning"],
    traitsOptional: ["Hardy", "Healthy"]
  },
  leviedSoldier: {
    displayName: "Levied Soldier",
    tags: [],
    description: "Whatever your profession if your poor enough, or your local lords in need enough nearly anyone can become a levied soldier at some point in their lives. They've been handed a spear, drilled until you were ready to drop, and sent to fight in some battle they couldn't possibly understand the true reasons for.",
    luck: 0,
    stamina: 4,
    willpower: 1,
    startingWealth: 0,
    focusedSkills: ["melee combat", "physical conditioning"],
    relatedSkills: ["craft (mason)", "craft (smith)", "melee combat", "personal defense", "physical conditioning"],
    traitsOptional: ["Reckless Attacker"]
  },
  mage: {
    displayName: "Mage",
    tags: [],
    description: "",
    luck: 1,
    stamina: 1,
    willpower: 2,
    startingWealth: 0,
    focusedSkills: ["Magical Aptitude"],
    relatedSkills: ["alchemy", "discipline", "knowledge (academics)", "knowledge (lore)", "physical conditioning"],
    traitsOptional: ["dependent mage", "learned mage", "natural mage"]
  },
  nobility: {
    displayName: "Nobility",
    tags: [],
    description: "Being born into a household of priveledge comes with a host of expectations and and responsibilities but, generally, also with a basic education.",
    luck: 1,
    stamina: 0,
    willpower: 3,
    startingWealth: 0,
    focusedSkills: ["discipline", "performance"],
    relatedSkills: ["discipline", "knowledge (academics)", "knowledge (lore)", "melee combat", "performance", "personal defense"],
    traitsOptional: ["Dual Weilder", "Linguist"]
  },
  professionalSoldier: {
    displayName: "Professional Soldier",
    tags: [],
    description: "",
    luck: 0,
    stamina: 3,
    willpower: 2,
    startingWealth: 0,
    focusedSkills: ["melee combat", "ranged combat"],
    relatedSkills: ["discipline", "melee combat", "personal defense", "physical conditioning", "ranged combat"],
    traitsOptional: ["Combat Reflexes"]
  },
  pugilist: {
    displayName: "Pugilist",
    tags: [],
    description: "",
    luck: 1,
    stamina: 3,
    willpower: 0,
    startingWealth: 0,
    focusedSkills: ["melee combat", "physical conditioning"],
    relatedSkills: ["medicine", "melee combat", "performance", "personal defense", "physical conditioning"],
    traitsOptional: ["Duelist", "Fueled by Pain"]
  },
  ranger: {
    displayName: "Ranger",
    tags: [],
    description: "",
    luck: 0,
    stamina: 3,
    willpower: 2,
    startingWealth: 0,
    focusedSkills: ["personal movement", "survival"],
    relatedSkills: ["awareness", "discipline", "personal movement", "survival", "ranged combat"],
    traitsOptional: ["Fast Reflexes", "Mobile Combatant"]
  },
  servant: {
    displayName: "Servant",
    tags: [],
    description: "Wealthy household's of nobles, citizens, and merchants in nearly every nation upon Flax imploy service workers of some kind from cooks and maids to gardeners and stable workers",
    luck: 0,
    stamina: 1,
    willpower: 4,
    startingWealth: 0,
    focusedSkills: ["animal handling", "awareness", "craft (cooking)", "discipline", "knowledge (academics)", "medicine", "performance"],
    relatedSkills: ["animal handling", "awareness", "craft (cooking)", "discipline", "knowledge (academics)", "medicine", "performance"],
    traitsOptional: ["Linguist"]
  },
  scout: {
    displayName: "Scout",
    tags: [],
    description: "",
    luck: 1,
    stamina: 2,
    willpower: 1,
    startingWealth: 0,
    focusedSkills: ["awareness", "personal movement"],
    relatedSkills: ["awareness", "personal defense", "personal movement", "stealth", "survival"],
    traitsOptional: ["Mobile Combatant"]
  },
  skilledCrafter: {
    displayName: "Skilled Crafter",
    tags: [],
    description: "Not all workers are simple laborers many have honed their craft to such levels that they could make a living in most villages where they're skills are in demand.",
    luck: 0,
    stamina: 1,
    willpower: 4,
    startingWealth: 0,
    focusedSkills: ["craft (artist)", "craft (cooking)", "craft (mason)", "craft (smith)", "craft (woodworker)"],
    relatedSkills: ["craft (artist)", "craft (cooking)", "craft (mason)", "craft (smith)", "craft (woodworker)"],
    traitsOptional: []
  },
  sniper: {
    displayName: "Sniper",
    tags: [],
    description: "",
    luck: 0,
    stamina: 2,
    willpower: 3,
    startingWealth: 0,
    focusedSkills: ["ranged combat"],
    relatedSkills: ["awareness", "personal movement", "survival"],
    traitsOptional: ["Ambusher", "Combat Reflexes"]
  },
  tutoredStudent: {
    displayName: "Tutored Student",
    tags: [],
    description: "Ambitious or wealthy heads of households might higher private tutors for they're children or even send them off to an accadamy for an education.",
    luck: 0,
    stamina: 0,
    willpower: 5,
    startingWealth: 0,
    focusedSkills: ["alchemy", "knowledge (academics)", "knowledge (lore)"],
    relatedSkills: ["alchemy", "craft (artist)", "discipline", "knowledge (academics)", "knowledge (lore)"],
    traitsOptional: ["Linguist"]
  },
  urchin: {
    displayName: "Urchin",
    tags: [],
    description: "Growing up on the streets is a death sentence to many, a good way to become a slave for others but some strive in this element as ciminals, workers, or performers.",
    luck: 2,
    stamina: 1,
    willpower: 0,
    startingWealth: 0,
    focusedSkills: ["awareness", "stealth"],
    relatedSkills: ["awareness", "legerdemain", "medicine", "personal defense", "personal movement", "stealth", "survival"],
    traitsOptional: ["Danger Sense"]
  },
  warrior: {
    displayName: "Warrior",
    tags: [],
    description: "Soldiers, crime inforcers, gladiators, rangers, squires, and just about any one who grew up scrappy can make claim to the warrior background.",
    luck: 0,
    stamina: 4,
    willpower: 1,
    startingWealth: 0,
    focusedSkills: ["melee combat", "personal defense"],
    relatedSkills: ["craft (smith)", "medicine", "melee combat", "personal defense", "physical conditioning", "ranged combat"],
    traitsOptional: ["Dual Weilder", "Healthy"]
  }
};

const printBackgroundData = true;

if (printBackgroundData) {
  const optionalTraits = {};
  const focusedSkillsList = {};
  const relatedSkillsList = {};
  const focusSkillSets = {};
  const attributeStrings = {};

  for (const key in backgrounds) {
    if (!backgrounds.hasOwnProperty(key)) continue;
    if (key === "exampleKey") continue;

    const background = backgrounds[key];

    const {displayName = "", luck = 0, stamina = 0, willpower = 0, focusedSkills = [], relatedSkills = [], traitsOptional = []} = background;

    const pointsTotal = 4 + (luck * 2) + stamina + willpower + 3;

    if (pointsTotal !== 12) console.log(`${displayName} has ${pointsTotal} instead of 12.`);

    const attributeString = `${luck}, ${stamina}, ${willpower}`;
    if (!attributeStrings[attributeString]) attributeStrings[attributeString] = 0;
    attributeStrings[attributeString]++;

    for (const trait of traitsOptional) {
      if (!optionalTraits[trait]) optionalTraits[trait] = 0;
      optionalTraits[trait]++;
    }

    for (const trait of focusedSkills) {
      if (!focusedSkillsList[trait]) focusedSkillsList[trait] = 0;
      focusedSkillsList[trait]++;
    }

    for (const trait of relatedSkills) {
      if (!relatedSkillsList[trait]) relatedSkillsList[trait] = 0;
      relatedSkillsList[trait]++;
    }

    const focusSkillSet = focusedSkills.join(" - ");
    if (!focusSkillSets[focusSkillSet]) focusSkillSets[focusSkillSet] = 0;
    focusSkillSets[focusSkillSet]++;
  }

  console.log('\n\n       Optional Trait Counts');
  orderedArray(optionalTraits).forEach((item) => {
    console.log(`${item}: ${optionalTraits[item]}`);
  });

  console.log('\n\n       Focused Skills Count');
  orderedArray(focusedSkillsList).forEach((item) => {
    console.log(`${item}: ${focusedSkillsList[item]}`);
  });

  console.log('\n\n       Related Skills Count');
  orderedArray(relatedSkillsList).forEach((item) => {
    console.log(`${item}: ${relatedSkillsList[item]}`);
  });

  console.log('\n\n       Focus Skill Sets Count');
  orderedArray(focusSkillSets).forEach((item) => {
    console.log(`${item}: ${focusSkillSets[item]}`);
  });

  console.log(`\n\n       Attribute Strings`);
  orderedArray(attributeStrings).forEach((string) => {
    console.log(`${string}: ${attributeStrings[string]}`);
  });
}

function orderedArray(object) {
  return Object.keys(object).sort((a, b) => object[a] - object[b]);
}

module.exports = backgrounds;
