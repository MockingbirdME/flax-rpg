/* This template is just to make copy/pasting new trainings easier.
const template = {
  displayName: "",
  cost: 5,
  tags: ["background"],
  prerequisitesDescription: "",
  checkPrerequisites: character => {
    console.log(character);
    return true;
  },
  description: "",
  details: "",
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

Two arrays, a focused (often just single skill) and auxiliary or related array.
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

Two arrays, a focused (often just single skill) and auxiliary or related array.
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
const commonSimpleBackgrounds = {
  cultist: {
    displayName: "Cultist",
    cost: 15,
    tags: ["background"],
    prerequisitesDescription: "",
    checkPrerequisites: character => {
      console.log(character);
      return true;
    },
    description: "There are many cults on Flax dedicated to some dweller, ohma, or immortal or another and even a few that follow individuals they believe to be some fabled hero. Cults provide vital services to the towns of Flax often supplying much needed story telling and medical attention to the populace.",
    details: `
    * 3 willpower.
    * Related Skills: alchemy, craft (artist), discipline, knowledge (academics), knowledge (lore), medicine, performance.
    * Chosen Skills: three related skills.
    * For each chosen skill:
      - Gain rank one in two different secondary skills associated with the skill.
      - Gain novice proficiency in the skill.
      - Gain access to the skilled training trait for that skill.
    `,
    apply: character => {
      console.log(character);
    }
  },
  gambler: {
    displayName: "Gambler",
    cost: 15,
    tags: ["background"],
    prerequisitesDescription: "None",
    checkPrerequisites: character => {
      console.log(character);
      return true;
    },
    description: "A gambler is someone who has a history of taking risks, they might be a scoundral who is most at home playing cards in some tavern basement, a merchant who puts his fortune on the line to make more money, or an acrobat who performs ever more daring feats without a proper safety net.",
    details: `
    * Gain 2 luck.
    * Related Skills: awareness, discipline, knowledge (lore), legerdemain, performance, personal movement, stealth.
    * Chosen Skills: three related skills.
    * For each chosen skill:
      - Gain rank one in two different secondary skills associated with the skill.
      - Gain novice proficiency in the skill.
      - Gain access to the skilled training trait for that skill.
    `,
    apply: character => {
      console.log(character);
    }
  },
  hunter: {
    displayName: "Hunter",
    cost: 15,
    tags: ["background"],
    prerequisitesDescription: "None",
    checkPrerequisites: character => {
      console.log(character);
      return true;
    },
    description: "Those who have experience capturing or killing creatures regardless of method. A hunter may use traps to protect their farm, a bow feed their family, or their own wits to bring in criminals with bounties on their heads.",
    details: `
    * Gain 2 stamina and 1 willpower.
    * Related Skills: animal handling, awareness, personal movement, craft (woodworker), survival, stealth, and ranged combat.
    * Chosen Skills: three related skills.
    * For each chosen skill:
      - Gain rank one in two different secondary skills associated with the skill.
      - Gain novice proficiency in the skill.
      - Gain access to the skilled training trait for that skill.
    `,
    apply: character => {
      console.log(character);
    }
  },
  laborer: {
    displayName: "Laborer",
    cost: 15,
    tags: ["background"],
    prerequisitesDescription: "None",
    checkPrerequisites: character => {
      console.log(character);
      return true;
    },
    description: "Farmers, bricklayers, cooks, and carpenters from the lowly field worder to the owner of a small homestead, they all have one thing in common, they work for a living. Physical labor of some kind has provided a wealth of experience to these individuals.",
    details: `
    * Resource Gain: 3 stamina.
    * Related Skills: animal handling, awareness, craft (cooking), craft (mason), craft (woodworker), personal movement, and physical conditioning.
    * Chosen Skills: three related skills.
    * For each chosen skill:
      - Gain rank one in two different secondary skills associated with the skill.
      - Gain novice proficiency in the skill.
      - Gain access to the skilled training trait for that skill.
    `,
    apply: character => {
      console.log(character);
    }
  },
  leviedSoldier: {
    displayName: "Levied Soldier",
    cost: 15,
    tags: ["background"],
    prerequisitesDescription: "None",
    checkPrerequisites: character => {
      console.log(character);
      return true;
    },
    description: "Whatever your profession if your poor enough, or your local lords in need enough nearly anyone can become a levied soldier at some point in their lives. They've been handed a spear, drilled until you were ready to drop, and sent to fight in some battle they couldn't possibly understand the true reasons for.",
    details: `
    * Gain 3 stamina.
    * Related Skills: craft (mason), craft (smith), discipline, melee combat, personal defense, personal movement, and physical conditioning.
    * Chosen Skills: three related skills.
    * For each chosen skill:
      - Gain rank one in two different secondary skills associated with the skill.
      - Gain novice proficiency in the skill.
      - Gain access to the skilled training trait for that skill.
    `,
    apply: character => {
      console.log(character);
    }
  },
  nobility: {
    displayName: "nobility",
    cost: 15,
    tags: ["background"],
    prerequisitesDescription: "None",
    checkPrerequisites: character => {
      console.log(character);
      return true;
    },
    description: "Being born into a household of priveledge comes with a host of expectations and and responsibilities but, generally, also with a basic education.",
    details: `
    * Gain 1 stamina and 2 willpower.
    * Related Skills: awareness, discipline, knowledge (academics), knowledge (lore), melee combat, performance, personal defense.
    * Chosen Skills: three related skills.
    * For each chosen skill:
      - Gain rank one in two different secondary skills associated with the skill.
      - Gain novice proficiency in the skill.
      - Gain access to the skilled training trait for that skill.
    `,
    apply: character => {
      console.log(character);
    }
  },
  servant: {
    displayName: "Servant",
    cost: 15,
    tags: ["background"],
    prerequisitesDescription: "None",
    checkPrerequisites: character => {
      console.log(character);
      return true;
    },
    description: "Wealthy household's of nobles and citizens in nearly every nation upon Flax imploy service workers of some kind from cooks and maids to gardeners and stable workers.",
    details: `
    * Gain 1 stamina and 2 willpower.
    * Related Skills: animal handling, awareness, craft (cooking), discipline, knowledge (academics), medicine, performance.
    * Chosen Skills: three related skills.
    * For each chosen skill:
      - Gain rank one in two different secondary skills associated with the skill.
      - Gain novice proficiency in the skill.
      - Gain access to the skilled training trait for that skill.
    `,
    apply: character => {
      console.log(character);
    }
  },
  urchin: {
    displayName: "Urchin",
    cost: 15,
    tags: ["background"],
    prerequisitesDescription: "None",
    checkPrerequisites: character => {
      console.log(character);
      return true;
    },
    description: "Growing up on the streets is a death sentence to many, a good way to become a slave for others but some strive in this element as ciminals, workers, or performers.",
    details: `
    * Gain 2 luck.
    * Related Skills: awareness, legerdemain, medicine, personal defense, personal movement, stealth, survival.
    * Chosen Skills: three related skills.
    * For each chosen skill:
      - Gain rank one in two different secondary skills associated with the skill.
      - Gain novice proficiency in the skill.
      - Gain access to the skilled training trait for that skill.
    `,
    apply: character => {
      console.log(character);
    }
  },
  warrior: {
    displayName: "Warrior",
    cost: 15,
    tags: ["background"],
    prerequisitesDescription: "None",
    checkPrerequisites: character => {
      console.log(character);
      return true;
    },
    description: "Soldiers, crime inforcers, gladiators, rangers, squires, and just about any one who grew up scrappy can make claim to the warrior background.",
    details: `
    * Gain 3 stamina.
    * Related Skills: craft (smith), medicine, melee combat, personal defense, personal movement, physical conditioning, ranged combat.
    * Chosen Skills: three related skills.
    * For each chosen skill:
      - Gain rank one in two different secondary skills associated with the skill.
      - Gain novice proficiency in the skill.
      - Gain access to the skilled training trait for that skill.
    `,
    apply: character => {
      console.log(character);
    }
  }
};

const commonFocusedBackgrounds = {
  athlete: {
    displayName: "Athlete",
    cost: 15,
    tags: ["background", "focused"],
    prerequisitesDescription: "",
    checkPrerequisites: character => {
      console.log(character);
      return true;
    },
    description: "",
    details: `
    * 2 stamina and 1 willpower.
    * Related Focus Skills: personal movement, physical conditioning.
    * Related Auxiliary Skills: discipline, medicine, melee combat, personal defense, personal movement.
    * Chosen Focus Skill: one related focus skills.
    * Chosen Auxiliary Skills: two related auxiliary skills.
    * For the chosen focus skill:
      - Gain rank one in one secondary skill associated with the skill.
      - Gain rank two in one secondary skill associated with the skill.
      - Gain skilled proficiency in the skill.
    * For each chosen auxiliary skill:
      - Gain rank one in two different secondary skills associated with the skill.
      - Gain access to the novice and skilled training traits for that skill.
    `,
    apply: character => {
      console.log(character);
    }
  },
  criminal: {
    displayName: "Criminal",
    cost: 15,
    tags: ["background", "focused"],
    prerequisitesDescription: "None",
    checkPrerequisites: character => {
      console.log(character);
      return true;
    },
    description: "",
    details: `
    * Gain 2 luck.
    * Related Focus Skills: legerdemain, stealth.
    * Related Auxiliary Skills: awareness, legerdemain, performance, personal movement, stealth.
    * Chosen Focus Skill: one related focus skills.
    * Chosen Auxiliary Skills: two related auxiliary skills.
    * For the chosen focus skill:
      - Gain rank one in one secondary skill associated with the skill.
      - Gain rank two in one secondary skill associated with the skill.
      - Gain skilled proficiency in the skill.
    * For each chosen auxiliary skill:
      - Gain rank one in two different secondary skills associated with the skill.
      - Gain access to the novice and skilled training traits for that skill.
    `,
    apply: character => {
      console.log(character);
    }
  },
  doctor: {
    displayName: "Doctor",
    cost: 15,
    tags: ["background", "focused"],
    prerequisitesDescription: "None",
    checkPrerequisites: character => {
      console.log(character);
      return true;
    },
    description: "",
    details: `
    * Gain 3 willpower.
    * Related Focus Skills: medicine, survival.
    * Related Auxiliary Skills: alchemy, discipline, knowledge (academics), medicine, survival.
    * Chosen Focus Skill: one related focus skills.
    * Chosen Auxiliary Skills: two related auxiliary skills.
    * For the chosen focus skill:
      - Gain rank one in one secondary skill associated with the skill.
      - Gain rank two in one secondary skill associated with the skill.
      - Gain skilled proficiency in the skill.
    * For each chosen auxiliary skill:
      - Gain rank one in two different secondary skills associated with the skill.
      - Gain access to the novice and skilled training traits for that skill.
    `,
    apply: character => {
      console.log(character);
    }
  },
  performer: {
    displayName: "Performer",
    cost: 15,
    tags: ["background", "focused"],
    prerequisitesDescription: "",
    checkPrerequisites: character => {
      console.log(character);
      return true;
    },
    description: "Actors, orators, musicians, street magicians and the like are all various forms of performers that can be found in any large city or traveling show.",
    details: `
    * 1 stamina and 2 willpower.
    * Related Focus Skills: discipline, performance.
    * Related Auxiliary Skills: craft (artist), discipline, legerdemain, melee combat, personal movement.
    * Chosen Focus Skill: one related focus skills.
    * Chosen Auxiliary Skills: two related auxiliary skills.
    * For the chosen focus skill:
      - Gain rank one in one secondary skill associated with the skill.
      - Gain rank two in one secondary skill associated with the skill.
      - Gain skilled proficiency in the skill.
    * For each chosen auxiliary skill:
      - Gain rank one in two different secondary skills associated with the skill.
      - Gain access to the novice and skilled training traits for that skill.
    `,
    apply: character => {
      console.log(character);
    }
  },
  professionalSoldier: {
    displayName: "Professional Soldier",
    cost: 15,
    tags: ["background", "focused"],
    prerequisitesDescription: "None",
    checkPrerequisites: character => {
      console.log(character);
      return true;
    },
    description: "",
    details: `
    * Gain 2 stamina and 1 willpower.
    * Related Focus Skills: melee combat, personal defense.
    * Related Auxiliary Skills: melee combat, personal defense, personal movement, physical conditioning, ranged combat.
    * Chosen Focus Skill: one related focus skills.
    * Chosen Auxiliary Skills: two related auxiliary skills.
    * For the chosen focus skill:
      - Gain rank one in one secondary skill associated with the skill.
      - Gain rank two in one secondary skill associated with the skill.
      - Gain skilled proficiency in the skill.
    * For each chosen auxiliary skill:
      - Gain rank one in two different secondary skills associated with the skill.
      - Gain access to the novice and skilled training traits for that skill.
    `,
    apply: character => {
      console.log(character);
    }
  },
  skilledCrafter: {
    displayName: "Skilled Crafter",
    cost: 15,
    tags: ["background", "focused"],
    prerequisitesDescription: "None",
    checkPrerequisites: character => {
      console.log(character);
      return true;
    },
    description: "Not all workers are simple laborers many have honed their craft to such levels that they could make a living in most villages where they're skills are in demand.",
    details: `
    * 1 stamina and 2 willpower.
    * Related Focus Skills: craft (artist), craft (cooking), craft (mason), craft (smith), and craft (woodworker).
    * Related Auxiliary Skills: craft (artist), craft (cooking), craft (mason), craft (smith), and craft (woodworker).
    * Chosen Focus Skill: one related focus skills.
    * Chosen Auxiliary Skills: two related auxiliary skills.
    * For the chosen focus skill:
      - Gain rank one in one secondary skill associated with the skill.
      - Gain rank two in one secondary skill associated with the skill.
      - Gain skilled proficiency in the skill.
    * For each chosen auxiliary skill:
      - Gain rank one in two different secondary skills associated with the skill.
      - Gain access to the novice and skilled training traits for that skill.
    `,
    apply: character => {
      console.log(character);
    }
  },
  sniper: {
    displayName: "Sniper",
    cost: 15,
    tags: ["background", "focused"],
    prerequisitesDescription: "None",
    checkPrerequisites: character => {
      console.log(character);
      return true;
    },
    description: "",
    details: `
    * Gain 1 stamina and 2 willpower.
    * Related Focus Skills: awareness, ranged combat.
    * Related Auxiliary Skills: animal handling, awareness, personal movement, survival, ranged combat.
    * Chosen Focus Skill: one related focus skills.
    * Chosen Auxiliary Skills: two related auxiliary skills.
    * For the chosen focus skill:
      - Gain rank one in one secondary skill associated with the skill.
      - Gain rank two in one secondary skill associated with the skill.
      - Gain skilled proficiency in the skill.
    * For each chosen auxiliary skill:
      - Gain rank one in two different secondary skills associated with the skill.
      - Gain access to the novice and skilled training traits for that skill.
    `,
    apply: character => {
      console.log(character);
    }
  },
  trainer: {
    displayName: "Trainer",
    cost: 15,
    tags: ["background", "focused"],
    prerequisitesDescription: "None",
    checkPrerequisites: character => {
      console.log(character);
      return true;
    },
    description: "",
    details: `
    * Gain 1 staima and 2 willpower.
    * Related Focus Skills: animal handling, discipline.
    * Related Auxiliary Skills: animal handling, awareness, discipline, medicine, survival.
    * Chosen Focus Skill: one related focus skills.
    * Chosen Auxiliary Skills: two related auxiliary skills.
    * For the chosen focus skill:
      - Gain rank one in one secondary skill associated with the skill.
      - Gain rank two in one secondary skill associated with the skill.
      - Gain skilled proficiency in the skill.
    * For each chosen auxiliary skill:
      - Gain rank one in two different secondary skills associated with the skill.
      - Gain access to the novice and skilled training traits for that skill.
    `,
    apply: character => {
      console.log(character);
    }
  },
  tutoredStudent: {
    displayName: "Tutored Student",
    cost: 15,
    tags: ["background", "focused"],
    prerequisitesDescription: "None",
    checkPrerequisites: character => {
      console.log(character);
      return true;
    },
    description: "Ambitious or wealthy heads of households might higher private tutors for they're children or even send them off to an accadamy for an education.",
    details: `
    * Gain 3 willpower.
    * Related Focus Skills: alchemy, knowledge (academics), knowledge (lore).
    * Related Auxiliary Skills: alchemy, craft (artist), discipline, knowledge (academics), knowledge (lore).
    * Chosen Focus Skill: one related focus skills.
    * Chosen Auxiliary Skills: two related auxiliary skills.
    * For the chosen focus skill:
      - Gain rank one in one secondary skill associated with the skill.
      - Gain rank two in one secondary skill associated with the skill.
      - Gain skilled proficiency in the skill.
    * For each chosen auxiliary skill:
      - Gain rank one in two different secondary skills associated with the skill.
      - Gain access to the novice and skilled training traits for that skill.
    `,
    apply: character => {
      console.log(character);
    }
  }
};

/*
'animalHandling',         trainer
'alchemy',                tutoredStudent
'awareness',              sniper
'craftArtist',            skilledCrafter
'craftChemistry',         skilledCrafter
'craftCooking',           skilledCrafter
'craftMason',             skilledCrafter
'craftSmith',             skilledCrafter
'craftWoodworker',        skilledCrafter
'discipline',             performer             trainer
'knowledgeAcademics',     tutoredStudent
'knowledgeLore',          tutoredStudent
'legerdemain',            criminal
'medicine',               doctor
'magicalAptitude',
'meleeCombat',            professionalSoldier
'performance',            performer
'personalDefense',        professionalSoldier
'personalMovement',       athlete
'physicalConditioning',   athlete
'rangedCombat',           sniper
'stealth',                criminal
'survival'                doctor
*/

const backgrounds = {...commonSimpleBackgrounds};

const allTrainings = {...backgrounds};


console.log(`${Object.keys(commonSimpleBackgrounds).length} common simple backgrounds to select from.`);
console.log(Object.keys(commonSimpleBackgrounds));

console.log(`${Object.keys(commonFocusedBackgrounds).length} common focused backgrounds to select from.`);
console.log(Object.keys(commonFocusedBackgrounds));

module.exports = allTrainings;
