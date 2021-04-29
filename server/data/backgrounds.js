/* This template is just to make copy/pasting new trainings easier.
const template = {
  displayName: ",
  cost: 5,
  tags: ["background", "common skilled"],
  prerequisitesDescription: ",
  checkPrerequisites: character => {
    console.log(character);
    return true;
  },
  description: ",
  details: ",
  apply: character => {
    console.log(character);
  }
};
*/

// Backgrounds are a set of more comprehensive trainings each with a lofty cost of 15???. These are not restricted to level 0 characters but are the only trainings available to such.

/*
Three basic background options:

All get:
3 resources (remember luck counts as two)


## Broad range of skills:

Single related skills array
* Chosen Skills: three related skills.
* For each chosen skill:
  - Gain rank one in two different secondary skills associated with the skill.
  - Gain novice proficiency in the skill.
  - Gain access to the skilled training trait for that skill.
  cost:
    - access to novice training x3
    - access to skill training x3
    - secondary rank x6
    - skill rank x3

## Specialized with auxiliary

Two arrays", "a focused (often just single skill) and auxiliary or related array.
* Chosen Focus Skill: one related focus skills.
* Chosen Auxiliary Skills: two related auxiliary skills.
* For the chosen focus skill:
  - Gain rank one in one secondary skill associated with the skill.
  - Gain rank two in one secondary skill associated with the skill.
  - Gain skilled proficiency in the skill.
* For each chosen auxiliary skill:
  - Gain rank one in two different secondary skills associated with the skill.
  - Gain access to the novice and skilled training traits for that skill.
  cost:
    - access to novice training x3
    - access to skilled training x3
    - secondary rank x7
    - skill rank x2

## Hyper specialized with single auxilary: ??? Needs work if going to be used.

Two arrays", "a focused (often just single skill) and auxiliary or related array.
* Chosen Focus Skill: one related focus skills.
* Chosen Auxiliary Skill: one related auxiliary skills.
* For the chosen focus skill:
  - Gain rank one in three different secondary skills associated with the skill.
  - Gain rank two in one secondary skill associated with the skill.
  - Gain skilled proficiency in the skill.
* For the chosen auxiliary skill:
  - Gain rank one in two different secondary skills associated with the skill.
  - Gain novice proficiency in the skill.
  - Gain access to the skilled training trait for that skill.
*/


/*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

types

# Common Skilled:

Stamina: cost 1 of 5 each
Willpower: cost 1 of 5 each
Luck: cost 2 of 5 each

Starting Wealth Level: unballenced, as it should be temporal.

Language Points: cost 1 of 5 each

List of 5 related skills:

Characters will pick 3 related skills from the list and for each skill picked:
- Gain 2 'Novice Specialized Training' traits or 'Skilled Specialized Training' traits, if the character is eligile, to be used for that skill.
- Gain the next level of Training trait for that skill if the character is eligible", "otherwise gain 1 novice or skilled specialized training trait to be used for that skill.


Background Trait: Some unique trait ability.


# Focused Skilled:

Stamina: cost 1 of 5 each
Willpower: cost 1 of 5 each
Luck: cost 2 of 5 each

Starting Wealth Level: unballenced, as it should be temporal.

Language Points: cost 1 of 5 each

List of 2, or more, focused skills:

List of 5 related skills:

Requires that the character already have novice proficiency in one or more focused skill options.

Characters will pick 1 focused skill from the list that:
- Gain 2 'Novice Specialized Training' traits and one 'Skilled Specialized Training' trait if the character is eligile to be used for that skill .
- Gain the next level of Training trait for that skill if the character is eligible", "otherwise gain 1 novice or skilled specialized training trait to be used for that skill.

Characters pick 1 related skill from the list that:
- Gain 2 'Novice Specialized Training' traits or 'Skilled Specialized Training' traits, if the character is eligile, to be used for that skill.
- Gain the next level of Training trait for that skill if the character is eligible", "otherwise gain 1 novice or skilled specialized training trait to be used for that skill.


Background Trait: Some unique trait ability.



===============================================

All Backgrounds provide:
Stamina: 1 point each (Gain 1 stamina each)
Willpower: 1 point each (Gain 1 willpower each)
Luck: 2 points each (Gain 1 luck each)

Language Points: 1 point each (Gain one linguist trait each)

Starting Wealth Level: unballenced, as it should be temporal.


relatedSkills: array of skills the character can select some number of based on tags.

traitsGranted: list of other traits a character with this background gains.
traitsOptional: list of other traits a character with this background can choose amungst.
traitsSelectable: how many optional traits the character can select, this number increases by one for each granted trait the character already had that cannot be taken multiple times.
+++++++++++++++++++++++++++

Skills Tags:

General: choose three related skills, for each:
  - Gain one novice or skilled specialized training trait in that skill.
  - Gain one novice or skilled training trait or one novice or skilled specialized training trait in that skill.
Focused: choose two related skills, for each:
  - Gain two novice or skilled specialized training trait in that skill.
  - Gain one novice or skilled training trait or one novice or skilled specialized training trait in that skill.
Specialized: choose one related skill:
  - Gain 4 novice or skilled specialized training trait in that skill.
  - Gain 1 novice, skilled, or expert specialized training trait in that skill.
  - Gain one novice, skilled, or expert training trait or one novice or skilled specialized training trait in that skill.

  ++++++++++++++++++++++++++++++++++++++

  {
    displayName: "",
    tags: ["General Focused Specialized"],
    description: "",
    luck: 0,
    stamina: 3,
    willpower: 2,
    languagePoints: 0,
    startingWealth: 1,
    relatedSkills: ["discipline", "melee combat", "personal defense", "personal movement", "physical conditioning"],
    traitsGranted: [],
    traitsOptional: [],
    traitsSelectable: [],
    apply: character => {
      console.log(character);
    }
  },
*/


const commonSkillBackgrounds = {
  athlete: {
    displayName: "Athlete",
    tags: ["background", "focused"],
    description: "",
    luck: 0,
    stamina: 3,
    willpower: 2,
    startingWealth: 1,
    languagePoints: 0,
    focusSkills: ["personal movement", "physical conditioning"],
    auxiliarySkills: ["discipline", "melee combat", "personal defense", "personal movement", "physical conditioning"],
    trait: {
      name: "",
      description: "",
      apply: ""
    },
    apply: character => {
      console.log(character);
    }
  },
  criminal: {
    displayName: "Criminal",
    tags: ["background", "common skilled"],
    description: "",
    luck: 1,
    stamina: 1,
    willpower: 2,
    startingWealth: 1,
    languagePoints: 0,
    relatedSkills: ["awareness", "legerdemain", "performance", "personal movement", "stealth"],
    trait: {
      name: "",
      description: "",
      apply: ""
    },
    apply: character => {
      console.log(character);
    }
  },
  cultist: {
    displayName: "Cultist",
    tags: ["background", "common skilled"],
    description: "There are many cults on Flax dedicated to some dweller, ohma, or immortal or another and even a few that follow individuals they believe to be some fabled hero. Cults provide vital services to the towns of Flax often supplying much needed story telling and medical attention to the populace.",
    luck: 0,
    stamina: 1,
    willpower: 2,
    startingWealth: 1,
    languagePoints: 2,
    relatedSkills: ["alchemy", "craft (artist)", "knowledge (academics)", "knowledge (lore)", "medicine"],
    trait: {
      name: "",
      description: "",
      apply: ""
    }
  },
  doctor: {
    displayName: "Doctor",
    tags: ["background", "focused"],
    description: "",
    luck: 1,
    stamina: 2,
    willpower: 1,
    startingWealth: 1,
    languagePoints: 0,
    focusSkills: ["medicine"],
    auxiliarySkills: ["alchemy", "discipline", "knowledge (academics)", "survival"],
    trait: {
      name: "",
      description: "",
      apply: ""
    },
    apply: character => {
      console.log(character);
    }
  },
  entertainer: {
    displayName: "Entertainer",
    tags: ["background", "common skilled"],
    description: "Actors, orators, musicians, street magicians and the like are all various forms of performers that can be found in any large city or traveling show.",
    luck: 1,
    stamina: 1,
    willpower: 1,
    startingWealth: 2,
    languagePoints: 1,
    relatedSkills: ["animal handling", "craft (artist)", "legerdemain", "performance", "physical conditioning"],
    trait: {
      name: "",
      description: "",
      apply: ""
    }
  },
  gambler: {
    displayName: "Gambler",
    tags: ["background", "common skilled"],
    description: "A gambler is someone who has a history of taking risks, they might be a scoundral who is most at home playing cards in some tavern basement, a merchant who puts his fortune on the line to make more money, or an acrobat who performs ever more daring feats without a proper safety net.",
    luck: 2,
    stamina: 0,
    willpower: 1,
    startingWealth: 2,
    languagePoints: 0,
    relatedSkills: ["awareness", "knowledge (lore)", "legerdemain", "performance", "stealth"],
    trait: {
      name: "",
      description: "",
      apply: ""
    }
  },
  hunter: {
    displayName: "Hunter",
    tags: ["background", "common skilled"],
    description: "Those who have experience capturing or killing creatures regardless of method. A hunter may use traps to protect their farm, a bow feed their family, or their own wits to bring in criminals with bounties on their heads.",
    luck: 1,
    stamina: 1,
    willpower: 1,
    startingWealth: 1,
    languagePoints: 1,
    relatedSkills: ["animal handling", "personal movement", "craft (woodworker)", "survival", "stealth", "ranged combat"],
    trait: {
      name: "",
      description: "",
      apply: ""
    }
  },
  laborer: {
    displayName: "Laborer",
    tags: ["background", "common skilled"],
    description: "Farmers, bricklayers, cooks, and carpenters from the lowly field worder to the owner of a small homestead, they all have one thing in common, they work for a living. Physical labor of some kind has provided a wealth of experience to these individuals.",
    luck: 0,
    stamina: 4,
    willpower: 1,
    startingWealth: 1,
    languagePoints: 0,
    relatedSkills: ["animal handling", "craft (cooking)", "craft (mason)", "craft (woodworker)", "physical conditioning"],
    trait: {
      name: "",
      description: "",
      apply: ""
    }
  },
  leviedSoldier: {
    displayName: "Levied Soldier",
    tags: ["background", "common skilled"],
    description: "Whatever your profession if your poor enough, or your local lords in need enough nearly anyone can become a levied soldier at some point in their lives. They've been handed a spear, drilled until you were ready to drop, and sent to fight in some battle they couldn't possibly understand the true reasons for.",
    luck: 0,
    stamina: 3,
    willpower: 1,
    startingWealth: 0,
    languagePoints: 1,
    relatedSkills: ["craft (mason)", "craft (smith)", "melee combat", "personal defense", "physical conditioning"],
    trait: {
      name: "",
      description: "",
      apply: ""
    }
  },
  nobility: {
    displayName: "nobility",
    tags: ["background", "common skilled"],
    description: "Being born into a household of priveledge comes with a host of expectations and and responsibilities but, generally, also with a basic education.",
    luck: 0,
    stamina: 1,
    willpower: 2,
    startingWealth: 3,
    languagePoints: 2,
    relatedSkills: ["discipline", "knowledge (academics)", "knowledge (lore)", "melee combat", "personal defense"],
    trait: {
      name: "",
      description: "",
      apply: ""
    }
  },
  professionalSoldier: {
    displayName: "Professional Soldier",
    tags: ["background", "focused"],
    description: "",
    luck: 1,
    stamina: 2,
    willpower: 1,
    startingWealth: 1,
    languagePoints: 0,
    focusSkills: ["meleeCombat", "Ranged Combat"],
    auxiliarySkills: ["melee combat", "personal defense", "personal movement", "physical conditioning", "ranged combat"],
    trait: {
      name: "",
      description: "",
      apply: ""
    },
    apply: character => {
      console.log(character);
    }
  },
  servant: {
    displayName: "Servant",
    tags: ["background", "common skilled"],
    description: "Wealthy household's of nobles and citizens in nearly every nation upon Flax imploy service workers of some kind from cooks and maids to gardeners and stable workers.",
    luck: 1,
    stamina: 1,
    willpower: 1,
    startingWealth: 1,
    languagePoints: 1,
    relatedSkills: ["animal handling", "awareness", "craft (cooking)", "discipline", "knowledge (academics)", "medicine", "performance"],
    trait: {
      name: "",
      description: "",
      apply: ""
    }
  },
  skilledCrafter: {
    displayName: "Skilled Crafter",
    tags: ["background", "focused"],
    description: "Not all workers are simple laborers many have honed their craft to such levels that they could make a living in most villages where they're skills are in demand.",
    luck: 1,
    stamina: 2,
    willpower: 1,
    startingWealth: 2,
    languagePoints: 0,
    focusSkills: ["craft (artist)", "craft (cooking)", "craft (mason)", "craft (smith)", "craft (woodworker)"],
    auxiliarySkills: ["craft (artist)", "craft (cooking)", "craft (mason)", "craft (smith)", "craft (woodworker)"],
    trait: {
      name: "",
      description: "",
      apply: ""
    },
    apply: character => {
      console.log(character);
    }
  },
  sniper: {
    displayName: "Sniper",
    tags: ["background", "focused"],
    description: "",
    luck: 1,
    stamina: 2,
    willpower: 1,
    startingWealth: 1,
    languagePoints: 0,
    auxiliarySkills: ["animal handling", "awareness", "personal movement", "survival", "ranged combat"],
    trait: {
      name: "",
      description: "",
      apply: ""
    },
    apply: character => {
      console.log(character);
    }
  },
  tutoredStudent: {
    displayName: "Tutored Student",
    tags: ["background", "focused"],
    description: "Ambitious or wealthy heads of households might higher private tutors for they're children or even send them off to an accadamy for an education.",
    luck: 1,
    stamina: 2,
    willpower: 1,
    startingWealth: 1,
    languagePoints: 0,
    auxiliarySkills: ["alchemy", "craft (artist)", "discipline", "knowledge (academics)", "knowledge (lore)"],
    trait: {
      name: "",
      description: "",
      apply: ""
    },
    apply: character => {
      console.log(character);
    }
  },
  urchin: {
    displayName: "Urchin",
    tags: ["background", "common skilled"],
    description: "Growing up on the streets is a death sentence to many, a good way to become a slave for others but some strive in this element as ciminals, workers, or performers.",
    luck: 1,
    stamina: 1,
    willpower: 2,
    startingWealth: 0,
    languagePoints: 0,
    relatedSkills: ["awareness", "legerdemain", "medicine", "personal defense", "personal movement", "stealth", "survival"],
    trait: {
      name: "",
      description: "",
      apply: ""
    }
  },
  warrior: {
    displayName: "Warrior",
    tags: ["background", "common skilled"],
    description: "Soldiers, crime inforcers, gladiators, rangers, squires, and just about any one who grew up scrappy can make claim to the warrior background.",
    luck: 1,
    stamina: 2,
    willpower: 1,
    startingWealth: 1,
    languagePoints: 0,
    relatedSkills: ["craft (smith)", "medicine", "melee combat", "personal defense", "physical conditioning", "ranged combat"],
    trait: {
      name: "",
      description: "",
      apply: ""
    }
  }
};


/*
'animalHandling'", "        trainer
'alchemy'", "               tutoredStudent
'awareness'", "             sniper
'craftArtist'", "           skilledCrafter
'craftChemistry'", "        skilledCrafter
'craftCooking'", "          skilledCrafter
'craftMason'", "            skilledCrafter
'craftSmith'", "            skilledCrafter
'craftWoodworker'", "       skilledCrafter
'discipline'", "            performer             trainer
'knowledgeAcademics'", "    tutoredStudent
'knowledgeLore'", "         tutoredStudent
'legerdemain'", "           criminal
'medicine'", "              doctor
'magicalAptitude',
'meleeCombat'", "           professionalSoldier
'performance'", "           performer
'personalDefense'", "       professionalSoldier
'personalMovement'", "      athlete
'physicalConditioning'", "  athlete
'rangedCombat'", "          sniper
'stealth'", "               criminal
'survival'                doctor
*/

const backgrounds = {...commonSkillBackgrounds};

const count = {};

for (const background in backgrounds) {
  const {relatedSkills} = backgrounds[background];
  for (const skill of relatedSkills) {
    if (!count[skill]) count[skill] = 0;
    count[skill] = count[skill] + 1;
  }

}

for (const background in backgrounds) {
  const {relatedSkills} = backgrounds[background];

  if (relatedSkills.length > 5) console.log(`${background} has ${relatedSkills.length - 5} too many skills.`);

}

console.log(count);



// console.log(`${Object.keys(commonSkillBackgrounds).length} common simple backgrounds to select from.`);
// console.log(Object.keys(commonSkillBackgrounds));
//
// console.log(`${Object.keys(commonFocusedSkillBackgrounds).length} common focused backgrounds to select from.`);
// console.log(Object.keys(commonFocusedSkillBackgrounds));

module.exports = backgrounds;
