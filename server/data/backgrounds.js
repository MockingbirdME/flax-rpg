/*
  Backgrounds each provide:
  - stamina/willpower/luck points. These are kind of like the gain stamina/willpower/luck traits under the hood, with luck costing 2 trait points, but they cannot be later traded out for other traits at level up.
  - Starting Wealth (This needs work)
  - gain two Skill Training traits with a chosen focus skill.
  - gain two Skill Training traits with a chosen related skill the character is not yet proficient in, if they are proficient in each related skill they may choose to put two ranks into any skill they are not yet proficient in.
  - traitsGranted: list of other traits a character with this background gains.
  - traitsOptional: list of other traits a character with this background can choose amungst.
  - traitsSelectable: how many optional traits the character can select, this number increases by one for each granted trait the character already had that cannot be taken multiple times.
*/


const backgrounds = {
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
    traitsGranted: [],
    traitsOptional: ["Skilled Training (focused skill)"],
    traitsSelectable: 1
  },
  athlete: {
    displayName: "Athlete",
    tags: [],
    description: "",
    luck: 0,
    stamina: 2,
    willpower: 0,
    startingWealth: 0,
    focusedSkills: ["personal movement", "physical conditioning"],
    relatedSkills: ["discipline", "melee combat", "personal defense", "personal movement", "physical conditioning"],
    traitsGranted: [],
    traitsOptional: ["Determined", "Healthy", "Skilled Training (related skill)"],
    traitsSelectable: 2
  },
  berserker: {
    displayName: "Berserker",
    tags: [],
    description: "",
    luck: 0,
    stamina: 2,
    willpower: 0,
    startingWealth: 0,
    focusedSkills: ["melee combat", "personal movement"],
    relatedSkills: ["awareness", "melee combat", "personal movement", "physical conditioning", "survival"],
    traitsGranted: [],
    traitsOptional: ["Fueled by Pain", "Reckless Attacker", "Skilled Training (related skill)"],
    traitsSelectable: 2
  },
  criminal: {
    displayName: "Criminal",
    tags: [],
    description: "",
    luck: 1,
    stamina: 0,
    willpower: 0,
    startingWealth: 0,
    focusedSkills: ["awareness", "legerdemain"],
    relatedSkills: ["awareness", "legerdemain", "performance", "personal movement", "stealth"],
    traitsGranted: [],
    traitsOptional: ["Danger Sense", "Skilled Training (related skill)"],
    traitsSelectable: 2
  },
  cultist: {
    displayName: "Cultist",
    tags: [],
    description: "There are many cults on Flax dedicated to some dweller, ohma, or immortal or another and even a few that follow individuals they believe to be some fabled hero. Cults provide vital services to the towns of Flax often supplying much needed story telling and medical attention to the populace.",
    luck: 0,
    stamina: 0,
    willpower: 2,
    startingWealth: 0,
    focusedSkills: ["knowledge (lore)", "medicine"],
    relatedSkills: ["alchemy", "craft (artist)", "knowledge (academics)", "knowledge (lore)", "medicine"],
    traitsGranted: ["Linguist"],
    traitsOptional: ["Linguist", "Skilled Training (related skill)"],
    traitsSelectable: 1
  },
  doctor: {
    displayName: "Doctor",
    tags: [],
    description: "",
    luck: 0,
    stamina: 0,
    willpower: 1,
    startingWealth: 0,
    focusedSkills: ["medicine"],
    relatedSkills: ["alchemy", "discipline", "knowledge (academics)", "survival"],
    traitsGranted: ["Linguist", "Skilled Training (medicine)"],
    traitsOptional: ["Hardy", "Skilled Training (focused skill)"],
    traitsSelectable: 1
  },
  duelist: {
    displayName: "Duelist",
    tags: [],
    description: "",
    luck: 1,
    stamina: 0,
    willpower: 0,
    startingWealth: 0,
    focusedSkills: ["melee combat", "personal defense"],
    relatedSkills: ["awareness", "discipline", "legerdemain", "melee combat", "personal defense"],
    traitsGranted: [],
    traitsOptional: ["Duelist", "Quick Draw", "Skilled Training (focused skill)"],
    traitsSelectable: 2
  },
  entertainer: {
    displayName: "Entertainer",
    tags: [],
    description: "Actors, orators, musicians, street magicians and the like are all various forms of performers that can be found in any large city or traveling show.",
    luck: 0,
    stamina: 1,
    willpower: 1,
    startingWealth: 0,
    focusedSkills: ["craft (artist)", "performance"],
    relatedSkills: ["animal handling", "craft (artist)", "legerdemain", "performance", "physical conditioning"],
    traitsGranted: [],
    traitsOptional: ["Fast Reflexes", "Linguist", "Skilled Training (related skill)", "Quick Draw"],
    traitsSelectable: 2
  },
  gambler: {
    displayName: "Gambler",
    tags: [],
    description: "A gambler is someone who has a history of taking risks, they might be a scoundral who is most at home playing cards in some tavern basement, a merchant who puts his fortune on the line to make more money, or an acrobat who performs ever more daring feats without a proper safety net.",
    luck: 2,
    stamina: 0,
    willpower: 0,
    startingWealth: 0,
    focusedSkills: ["legerdemain", "knowledge (lore)"],
    relatedSkills: ["awareness", "knowledge (lore)", "legerdemain", "performance", "stealth"],
    traitsGranted: [],
    traitsOptional: [],
    traitsSelectable: 0
  },
  hunter: {
    displayName: "Hunter",
    tags: [],
    description: "Those who have experience capturing or killing creatures regardless of method. A hunter may use traps to protect their farm, a bow feed their family, or their own wits to bring in criminals with bounties on their heads.",
    luck: 1,
    stamina: 1,
    willpower: 0,
    startingWealth: 0,
    focusedSkills: ["survival", "stealth"],
    relatedSkills: ["animal handling", "personal movement", "craft (woodworker)", "survival", "stealth", "ranged combat"],
    traitsGranted: [],
    traitsOptional: ["Ambusher", "Determined", "Skilled Training (focused skill)"],
    traitsSelectable: 1
  },
  laborer: {
    displayName: "Laborer",
    tags: [],
    description: "",
    luck: 0,
    stamina: 3,
    willpower: 0,
    startingWealth: 0,
    focusedSkills: ["animal handling", "craft (cooking)", "craft (mason)", "craft (woodworker)", "physical conditioning"],
    relatedSkills: ["animal handling", "craft (cooking)", "craft (mason)", "craft (woodworker)", "physical conditioning"],
    traitsGranted: [],
    traitsOptional: ["Hardy", "Healthy", "Skilled Training (focused skill)"],
    traitsSelectable: 1
  },
  leviedSoldier: {
    displayName: "Levied Soldier",
    tags: [],
    description: "Whatever your profession if your poor enough, or your local lords in need enough nearly anyone can become a levied soldier at some point in their lives. They've been handed a spear, drilled until you were ready to drop, and sent to fight in some battle they couldn't possibly understand the true reasons for.",
    luck: 0,
    stamina: 2,
    willpower: 1,
    startingWealth: 0,
    focusedSkills: ["melee combat", "physical conditioning"],
    relatedSkills: ["craft (mason)", "craft (smith)", "melee combat", "personal defense", "physical conditioning"],
    traitsGranted: [],
    traitsOptional: ["Reckless Attacker", "Skilled Training (focused skill)"],
    traitsSelectable: 1
  },
  nobility: {
    displayName: "Nobility",
    tags: [],
    description: "Being born into a household of priveledge comes with a host of expectations and and responsibilities but, generally, also with a basic education.",
    luck: 0,
    stamina: 0,
    willpower: 1,
    startingWealth: 0,
    focusedSkills: ["discipline", "performance"],
    relatedSkills: ["discipline", "knowledge (academics)", "knowledge (lore)", "melee combat", "performance", "personal defense"],
    traitsGranted: ["Linguist"],
    traitsOptional: ["Dual Weilder", "Linguist", "Skilled Training (related skill)"],
    traitsSelectable: 2
  },
  professionalSoldier: {
    displayName: "Professional Soldier",
    tags: [],
    description: "",
    luck: 0,
    stamina: 2,
    willpower: 1,
    startingWealth: 0,
    focusedSkills: ["meleeCombat", "Ranged Combat"],
    relatedSkills: ["discipline", "melee combat", "personal defense", "physical conditioning", "ranged combat"],
    traitsGranted: [],
    traitsOptional: ["Combat Reflexes", "Skilled Training (focused skill)"],
    traitsSelectable: 1
  },
  pugilist: {
    displayName: "Pugilist",
    tags: [],
    description: "",
    luck: 0,
    stamina: 1,
    willpower: 1,
    startingWealth: 0,
    focusedSkills: ["meleeCombat", "physicalConditioning"],
    relatedSkills: ["discipline", "melee combat", "performance", "personal defense", "physical conditioning"],
    traitsGranted: [],
    traitsOptional: ["Duelist", "Fueled by Pain", "Skilled Training (focused skill)"],
    traitsSelectable: 2
  },
  ranger: {
    displayName: "Ranger",
    tags: [],
    description: "",
    luck: 0,
    stamina: 1,
    willpower: 1,
    startingWealth: 0,
    focusedSkills: ["personal movement", "survival"],
    relatedSkills: ["awareness", "discipline", "personal movement", "survival", "ranged combat"],
    traitsGranted: [],
    traitsOptional: ["Fast Reflexes", "Mobile Combatant", "Skilled Training (focused skill)"],
    traitsSelectable: 2
  },
  servant: {
    displayName: "Servant",
    tags: [],
    description: "Wealthy household's of nobles, citizens, and merchants in nearly every nation upon Flax imploy service workers of some kind from cooks and maids to gardeners and stable workers",
    luck: 0,
    stamina: 1,
    willpower: 1,
    startingWealth: 0,
    focusedSkills: ["animal handling", "awareness", "craft (cooking)", "discipline", "knowledge (academics)", "medicine", "performance"],
    relatedSkills: ["animal handling", "awareness", "craft (cooking)", "discipline", "knowledge (academics)", "medicine", "performance"],
    traitsGranted: [],
    traitsOptional: ["Linguist", "Skilled Training (focused skill)"],
    traitsSelectable: 2
  },
  scout: {
    displayName: "Scout",
    tags: [],
    description: "",
    luck: 0,
    stamina: 1,
    willpower: 1,
    startingWealth: 0,
    focusedSkills: ["awareness", "personal movement"],
    relatedSkills: ["awareness", "personal defense", "personal movement", "stealth", "survival"],
    traitsGranted: [],
    traitsOptional: ["Mobile Combatant", "Skilled Training (focused skill)"],
    traitsSelectable: 2
  },
  skilledCrafter: {
    displayName: "Skilled Crafter",
    tags: [],
    description: "Not all workers are simple laborers many have honed their craft to such levels that they could make a living in most villages where they're skills are in demand.",
    luck: 1,
    stamina: 1,
    willpower: 1,
    startingWealth: 0,
    focusedSkills: ["craft (artist)", "craft (cooking)", "craft (mason)", "craft (smith)", "craft (woodworker)"],
    relatedSkills: ["craft (artist)", "craft (cooking)", "craft (mason)", "craft (smith)", "craft (woodworker)"],
    traitsGranted: [],
    traitsOptional: ["Skilled Training (focused skill)"],
    traitsSelectable: 0
  },
  sniper: {
    displayName: "Sniper",
    tags: [],
    description: "",
    luck: 0,
    stamina: 1,
    willpower: 1,
    startingWealth: 0,
    focusedSkills: ["ranged combat"],
    relatedSkills: ["awareness", "personal movement", "survival"],
    traitsGranted: [],
    traitsOptional: ["Ambusher", "Combat Reflexes", "Skilled Training (focused skill)"],
    traitsSelectable: 2
  },
  tutoredStudent: {
    displayName: "Tutored Student",
    tags: [],
    description: "Ambitious or wealthy heads of households might higher private tutors for they're children or even send them off to an accadamy for an education.",
    luck: 0,
    stamina: 0,
    willpower: 2,
    startingWealth: 0,
    focusedSkills: ["alchemy", "knowledge (academics)", "knowledge (lore)"],
    relatedSkills: ["alchemy", "craft (artist)", "discipline", "knowledge (academics)", "knowledge (lore)"],
    traitsGranted: ["Linguist"],
    traitsOptional: ["Linguist", "Skilled Training (related skill)"],
    traitsSelectable: 1
  },
  urchin: {
    displayName: "Urchin",
    tags: [],
    description: "Growing up on the streets is a death sentence to many, a good way to become a slave for others but some strive in this element as ciminals, workers, or performers.",
    luck: 1,
    stamina: 0,
    willpower: 0,
    startingWealth: 0,
    focusedSkills: ["awareness", "stealth"],
    relatedSkills: ["awareness", "legerdemain", "medicine", "personal defense", "personal movement", "stealth", "survival"],
    traitsGranted: [],
    traitsOptional: ["Danger Sense", "Skilled Training (related skill)"],
    traitsSelectable: 2
  },
  warrior: {
    displayName: "Warrior",
    tags: [],
    description: "Soldiers, crime inforcers, gladiators, rangers, squires, and just about any one who grew up scrappy can make claim to the warrior background.",
    luck: 0,
    stamina: 2,
    willpower: 1,
    startingWealth: 0,
    focusedSkills: ["melee combat", "ranged combat"],
    relatedSkills: ["craft (smith)", "medicine", "melee combat", "personal defense", "physical conditioning", "ranged combat"],
    traitsGranted: [],
    traitsOptional: ["Dual Weilder", "Healthy", "Skilled Training (related skill)"],
    traitsSelectable: 1
  }
};

const printBackgroundData = true;

if (printBackgroundData) {
  const grantedTraits = {};
  const optionalTraits = {};
  const focusedSkillsList = {};
  const relatedSkillsList = {};
  const focusSkillSets = {};

  for (const key in backgrounds) {
    if (!backgrounds.hasOwnProperty(key)) continue;
    if (key === "exampleKey") continue;

    const background = backgrounds[key];

    const {displayName = "", luck = 0, stamina = 0, willpower = 0, focusedSkills = [], relatedSkills = [], traitsGranted = [], traitsSelectable = 0, traitsOptional = []} = background;

    const pointsTotal = 4 + (luck * 2) + stamina + willpower + traitsGranted.length + traitsSelectable;

    if (pointsTotal !== 8) console.log(`${displayName} has ${pointsTotal} instead of 8.`);

    for (const trait of traitsGranted) {
      if (!grantedTraits[trait]) grantedTraits[trait] = 0;
      grantedTraits[trait]++;
    }

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

  console.log('\n\n       Granted Trait Counts');
  Object.keys(grantedTraits).sort()
    .forEach((item) => {
      console.log(`${item}: ${grantedTraits[item]}`);
    });


  console.log('\n\n       Optional Trait Counts');
  Object.keys(optionalTraits).sort()
    .forEach((item) => {
      console.log(`${item}: ${optionalTraits[item]}`);
    });

  console.log('\n\n       Focused Skills Count');
  Object.keys(focusedSkillsList).sort()
    .forEach((item) => {
      console.log(`${item}: ${focusedSkillsList[item]}`);
    });

  console.log('\n\n       Related Skills Count');
  Object.keys(relatedSkillsList).sort()
    .forEach((item) => {
      console.log(`${item}: ${relatedSkillsList[item]}`);
    });

  console.log('\n\n       Focus Skill Sets Count');
  Object.keys(focusSkillSets).sort()
    .forEach((item) => {
      console.log(`${item}: ${focusSkillSets[item]}`);
    });
}

module.exports = backgrounds;
