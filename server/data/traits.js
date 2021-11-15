/* eslint-disable complexity */

const traitsData = {
  /* ++++++++++++++++ GENERAL TRAITS ++++++++++++++++ */
  determined: {
    displayName: "Determined",
    type: "General",
    requirements: [],
    requirementsDescription: "0/3/6/9/12/15/18/21 ranks in secondary skills associated with Discipline ",
    description:
      "Each time a character takes this trait they increase their max willpower by one.",
    isCharacterEligible: character => {
      // TODO check that the character has enough physical conditioning secondary skill ranks.
    },
    apply: (character) => {
      character.updateVariable("staminaMaxAdjustment", 1);
    }
  },
  hardy: {
    displayName: "Hardy",
    type: "General",
    requirements: [],
    requirementsDescription: "10 or more stamina",
    description:
      "The character gains a bonus die on rolls to resist, or recover from, illness and poisons.",
    isCharacterEligible: () => {
      // TODO
    },
    apply: (character, options = {}) => {
      // TODO
    }
  },
  healthy: {
    displayName: "Healthy",
    type: "General",
    requirements: [],
    requirementsDescription: "0/3/6/9/12/15/18/21 ranks in secondary skills associated with physical conditioning",
    description:
      "Each time a character takes this trait they increase their max stamina by one.",
    isCharacterEligible: character => {
      // TODO check that the character has enough physical conditioning secondary skill ranks.
    },
    apply: (character) => {
      character.updateVariable("staminaMaxAdjustment", 1);
    }
  },
  linguist: {
    displayName: "Linguist",
    type: "General",
    requirements: [],
    requirementsDescription: "",
    description:
      "The character learns one spoken or written language or two spoken languages for which they already know a related language.",
    isCharacterEligible: () => true,
    apply: (character, options = {}) => {
      // TODO
    }
  },
  skillTraining: {
    displayName: "Skill Training",
    type: "General",
    requirements: [],
    requirementsDescription: "",
    description: `
    The character improves aptitude in a selected skill or one of its secondary skills. If the character meets the secondary skill ranks requirement to increase the skill's proficiency level do so; otherwise, increase one eligible secondary skill by one rank.
    Proficiency requirements and limits
    | Proficiency | Required Secondary Ranks | Max Secondary Rank |
    | --- | --- | --- |
    | untrained | N/A | 1 |
    | novice | 1 | 2 |
    | skilled | 3 | 3 |
    | expert | 7 | 4 |
    | master | 15 | 5 |
    `,
    options: (character, selectedOptions = {}) => {
      // TODO
    },
    isCharacterEligible: () => true,
    apply: (character, options = {}) => {
      // TODO
    }
  },
  tough: {
    displayName: "Tough",
    type: "General",
    requirements: [],
    requirementsDescription: "6/14/30 total ranks in secondary skill associated with any combination of Discipline and Physical Conditioning",
    description:
      "Each time a character takes this trait they increase their max wounds by one.",
    isCharacterEligible: () => true,
    apply: (character) => {
      character.updateVariable("woundsMaxAdjustment", 1);
    }
  },

  /* ++++++++++++++++ COMBAT TRAITS ++++++++++++++++ */
  ambusher: {
    displayName: "Ambusher",
    type: "Combat",
    requirements: [],
    requirementsDescription: "1 rank in a secondary skill associated with stealth the first time this trait is taken or the requirements for at least one upgrade for this trait for subsequent times this trait is taken",
    description:
      "The character gains an ambush damage bonus that they can apply to eligible attacks, the damage bonus is equal to 3; once a character has applied their ambush bonus damage to a target they cannot apply it to that target again until their next turn. The character may apply their ambush bonus when making a ranged attack at short range or a melee attack against a flat-footed foe.",
    upgrades: {
      assassin: {
        displayName: "Assassin",
        type: "Add-on",
        requirementsDescription: "the stealthy upgrade and 15 total ranks in secondary skills associated with stealth.",
        description:
          "The characters ambush damage increases by 3 if the target is surprised or by 7 if they're flat footed.",
        isCharacterEligible: character => {
          // TODO make this work
        }
      },
      flanking: {
        displayName: "Flanking",
        type: "Add-on",
        requirementsDescription: "the stealthy upgrade and 3 total ranks in secondary skills associated with melee combat.",
        description:
          "The character may apply their ambush bonus when making a melee attack against a foe the character is flanking.",
        isCharacterEligible: character => {
          // TODO make this work
        }
      },
      skilled: {
        displayName: "Skilled",
        type: "Add-on",
        requirementsDescription: "",
        description:
          "Each time the character takes this trait increase their ambush damage by 1.",
        isCharacterEligible: character => {
          // TODO make this work
        }
      },
      sneakAttack: {
        displayName: "Sneak Attack",
        type: "Add-on",
        requirementsDescription: "3 rank in secondary skills associated with stealth",
        description:
          "The character may apply their ambush bonus when making a melee attack against a flat footed or surprised foe.",
        isCharacterEligible: character => {
          // TODO make this work
        }
      },
      sniper: {
        displayName: "Sniper",
        type: "Add-on",
        requirementsDescription: "the stealthy upgrade and 3 total ranks in secondary skills associated with ranged combat.",
        description:
          "The character may apply their ambush bonus when making a ranged attack at any range provided they meet their other requirements to apply this bonus.",
        isCharacterEligible: character => {
          // TODO make this work
        }
      },
      stealthy: {
        displayName: "Stealthy",
        type: "Add-on",
        requirementsDescription: "the sneak attack upgrade and at least 7 total ranks in secondary skills associated with any combination of stealth and personal movement",
        description:
          "The character may apply their ambush bonus when the target is unaware of the character's presence, or unaware that they are a threat.",
        isCharacterEligible: character => {
          // TODO make this work
        }
      }
    },
    isCharacterEligible: character => {
      // TODO make this work
    },
    apply: character => {
      // TODO make this work.
    }
  },
  combatReflexes: {
    displayName: "Combat Reflexes",
    type: "Combat",
    requirements: [],
    requirementsDescription: "1 rank in a secondary skill associated with melee combat the first time this trait is taken or the requirements for at least one upgrade for this trait for subsequent times this trait is taken",
    description:
      "Once per round the character may make a combat reflexes reaction, this reaction does not cost an action on the character's next turn. The character may use their combat reflexes reaction to make a free attack when one is provoked.",
    upgrades: {
      takeTheShot: {
        displayName: "Take the Shot",
        type: "Add-on",
        requirementsDescription: "3 ranks in secondary skills associated with ranged combat.",
        description:
          "The character may use their combat reflexes reaction to take a held ranged attack action.",
        isCharacterEligible: character => {
          // TODO make this work
        }
      },
      more: {
        displayName: "TODO add a few more",
        type: "Add-on",
        requirementsDescription: "3 ranks in secondary skills associated with ranged combat.",
        description:
          "At the very least we need one for quick movments and a few that provide new reaction options.",
        isCharacterEligible: character => {
          // TODO make this work
        }
      }
    },
    isCharacterEligible: character => {
      // TODO make this work
    },
    apply: character => {
      // TODO make this work.
    }
  },
  dangerSense: {
    displayName: "Danger Sense",
    type: "Combat",
    requirements: [],
    requirementsDescription: "1/3/7/15 total ranks in secondary skill associated with each the Awareness and Personal Defense skills.",
    description: `
    Characters can take this trait multiple times gaining cumulative benefits for each time they've taken this trait.
      1 - The character is never *flat footed* when conscious and unrestrained
      2 - The character still benefits from their melee, ranged, and mental defense bonuses when *surprised*, conscious, and unrestrained
      3 - The character may act on rounds when they are surprised at initiative - 10, if their initiative would be before all non-surprised enemies they act after the enemy with the highest initiative.
      4 - The character acts normally on rounds they are surprised, they stop being surprised once they have acted.
      `,
    isCharacterEligible: character => {
      // TODO make this work
    },
    apply: character => {
      // TODO make this work.
    }
  },
  dualWeilder: {
    displayName: "dualWeilder",
    type: "Combat",
    requirements: [],
    requirementsDescription: "3/7 total ranks in secondary skills associated with any combination of melee combat and ranged combat.",
    description: `
    Characters can take this trait multiple times gaining cumulative benefits for each time they've taken this trait.
        1 - The character can make the off-hand attack combat action with weapons that have the *light* or *balanced* and the *one-handed* or *hand-and-a-half* traits.
        2 - The character can wield any weapon without the *two-handed* trait in their off hand and make off handed attacks with them.
    `,
    isCharacterEligible: character => {
      // TODO make this work
    },
    apply: character => {
      // TODO make this work.
    }
  },
  duelist: {
    displayName: "Duelist",
    type: "Combat",
    requirements: [],
    requirementsDescription: "1 rank in a secondary skill associated with personal defense the first time this trait is taken or the requirements for at least one upgrade for this trait for subsequent times this trait is taken",
    description:
      "The character may spend one action point on their turn to choose one character within this trait's range of 10 hexes to be their dueling opponent. The character may spend their reaction to add one penalty die to an attack's skill check against them made by their dueling opponent provided the attack was made from within this ability's range and no other character is within melee range of them. A character ceases to be a dueling opponent if another character is made a dueling opponent or if they leave the character's sight and this ability's range for one full round.",
    upgrades: {
      defensive: {
        displayName: "Defensive",
        type: "Add-on",
        requirementsDescription: "3 ranks in secondary skills associated with personal defense.",
        description:
          "When the character spends their reaction to add a penalty die to their dueling opponent they now add one penalty die to all eligible attacks from their opponent until the character's next turn.",
        isCharacterEligible: character => {
          // TODO make this work
        }
      },
      distance: {
        displayName: "Distance",
        type: "Add-on",
        requirementsDescription: "3 ranks in secondary skills associated with ranged combat.",
        description:
          "The range for Duelist's effects is increased to 30 hexes.",
        isCharacterEligible: character => {
          // TODO make this work
        }
      },
      melee: {
        displayName: "Melee",
        type: "Add-on",
        requirementsDescription: "3 ranks in secondary skills associated with melee combat.",
        description:
          "The character no longer requires that no other character is within melee range of them to use their reaction to gain benefits from duelist traits.",
        isCharacterEligible: character => {
          // TODO make this work
        }
      },
      expert: {
        displayName: "Expert",
        type: "Add-on",
        requirementsDescription: "7 ranks in secondary skills associated with personal defense.",
        description:
          "When the character spends their reaction to grant a penalty die to one or more attacks by their dueling opponent they gain one bonus die on their next eligible attack against their dueling opponent before the end of their next turn.",
        isCharacterEligible: character => {
          // TODO make this work
        }
      },
      superlative: {
        displayName: "Superlative",
        type: "Add-on",
        requirementsDescription: "the expert upgrade and 15 ranks in secondary skills associated with personal defense.",
        description:
          "When the character spends their reaction to grant a penalty die to one or more attacks by their dueling opponent they may make a single repost or return fire reaction against that opponent before the begining of their next turn without spending a reaction.",
        isCharacterEligible: character => {
          // TODO make this work
        }
      }
    },
    isCharacterEligible: character => {
      // TODO make this work
    },
    apply: character => {
      // TODO make this work.
    }
  },
  fastReflexes: {
    displayName: "Fast Reflexes",
    type: "Combat",
    requirements: [],
    requirementsDescription: "1/3/7/15 total ranks in secondary skill associated with any combination of Awareness, Discipline, Legerdemain, and Personal Movement.",
    description:
      "For each time a character has this trait they gain a +1 bonus to their initiative.",
    isCharacterEligible: () => true,
    apply: character => {
      character.updateVariable('initiativeAdjustment', 1);
    }
  },
  fueledByPain: {
    displayName: "Fueled by Pain",
    type: "Combat",
    requirements: [],
    requirementsDescription: "At least 5 max stimina.",
    description:
      "If a character suffers one or more wounds after fully resolving the damage they regain all missing stamina and all actions they take before the end of their next turn have their stamina cost reduced by 1, to a minimum of 0.",
    isCharacterEligible: () => true,
    apply: character => {
      // TODO once damage is added to character have this automatically trigger.
      character.addTraitAsNote({traitName: 'fueledByPain'});
    }
  },
  mobileCombatant: {
    displayName: "Mobile Combatant",
    type: "Combat",
    requirements: [],
    requirementsDescription: "2/6/14/30 total ranks in secondary skill associated with any combination of personal defense and personal movement.",
    description: `
    Characters can take this trait multiple times gaining cumulative benefits for each time they've taken this trait.
        1 - The character gains a mobile combat defense bonus against free attacks provided they have not taken the disengage action this turn, this bonus is equal to their melee defense bonus.
        2 - The character gains their mobile combatant defense bonus to free attacks even if they've taken the disengage action this turn.
        3 - The character no longer provokes free attacks.
        4 - When one or more characters would get a free attack against you for the first time in a scene, if not for having taken this trait, they must spend their reaction as if they have done so.
    `,
    isCharacterEligible: character => {
      // TODO make this work
    },
    apply: character => {
      // TODO make this work.
    }
  },
  quickDraw: {
    displayName: "Quick Draw",
    type: "Combat",
    requirements: [],
    requirementsDescription: "1/3/7/15 total ranks in secondary skill associated with legerdemain.",
    description:
      "Characters can take this trait multiple times, each round the character may perform one *ready/stow item* action for each time they've taken this trait with an action point cost of 0.",
    isCharacterEligible: character => character => {
      // TODO make this work
    },
    apply: character => {
      // TODO make this work.
    }
  },
  recklessAttacker: {
    displayName: "Reckless Attacker",
    type: "Combat",
    requirements: [],
    requirementsDescription: "1/3/7/15 total ranks in secondary skills associated with melee combat.",
    description: `
    Characters can take this trait multiple times gaining cumulative benefits for each time they've taken this trait.
        1 - The character may choose to spend one stamina or one defense before making a basic or brawling attack on their turn, if they do they gain a reckless bonus die to that melee attack skill check.
        2 - The character may trigger this ability on any melee attack action, not just basic and brawing attacks.
        3 - The character may spend an additional stamina or defense when they use this ability to gain a second reckless bonus die on this skill check.
        4 - When the character uses reckless attack they gain the bonus die/dice to all eligible melee attacks they make this turn, not just the next one.
    `,
    isCharacterEligible: character => {
      // TODO make this work
    },
    apply: character => {
      // TODO make this work.
    }
  },

  /* ++++++++++++++++ ARCANE TRAITS ++++++++++++++++ */

  dependentMage: {
    displayName: "Dependent Mage",
    type: "Mage",
    requirements: [],
    requirementsDescription: "no other Mage traits the first time this trait is taken or the requirements for at least one upgrade for this trait for subsequent times this trait is taken",
    description:
      "The character can utilize magic so long as they have arcane essense in their system. When the character takes the Skill Training trait and gains a level in a Magical Aptitude secondary skill they may select one Arcane Power associated with that secondary skill to learn they may then choose a different magical aptitude secondary skill they have at least 1 rank in to increase by 1 rank. The character adds a penalty die to their cast spell, gather, or shape arcane energy skill checks if they have gone 24 hours without consuming arcane essense and cannot make cast spell, gather, or shape arcane energy skill checks at all if they've gone a full span of days without consuming arcane essense.",
    upgrades: {
      cleanEssenseAbsorption: {
        displayName: "Clean Essense Absorption",
        type: "Add-on",
        requirementsDescription: "none",
        description:
          "When the arcane essense you've consumed wears off you do not suffer the additoinal random max stamina loss.",
        isCharacterEligible: character => {
          // TODO make this work
        }
      },
      essensePoweredMagic: {
        displayName: "Essense Powered Magic",
        type: "Add-on",
        requirementsDescription: "none.",
        description:
          "When you would suffer arcane dues and have consumed arcane essense in the last 24 hours you may spend a point of max stamina to reduce those dues by 5 <BALANCE THIS REDUCTION>.",
        isCharacterEligible: character => {
          // TODO make this work
        }
      },
      passivePower: {
        displayName: "Passive Power",
        type: "Add-on",
        requirementsDescription: "At least 1 rank in a magical aptitude secondary skill that they have no gained the passive ability from.",
        description:
          "Choose a magical aptitude secondary skill you have at least one rank in and have not yet gained its passive ability to gain its passive ability.",
        isCharacterEligible: character => {
          // TODO make this work
        }
      },
      spells: {
        displayName: "Spells",
        type: "Add-on",
        requirementsDescription: "none.",
        description:
          "The character may build and prepare a number of spells equal to their rank in the magical aptitude skill plus the number of times they have taken this upgrade.",
        isCharacterEligible: character => {
          // TODO make this work
        }
      },
      more: {
        displayName: "TODO add a few more",
        type: "Add-on",
        requirementsDescription: ".",
        description:
          "Need at least one or two options that allow the caster to take in more arcane essense and spend the arcane essense in their system.",
        isCharacterEligible: character => {
          // TODO make this work
        }
      }
    },
    isCharacterEligible: character => {
      // TODO make this work
    },
    apply: character => {
      // TODO make this work.
    }
  },
  expandedSpellList: {
    displayName: "Expanded Spell List",
    type: "Mage",
    requirements: [],
    requirementsDescription: "Knowledge of at least one spell.",
    description:
      "This trait may be taken any number of times, each time it is taken the character increases the number of spells they know by one."
  },
  learnedMage: {
    displayName: "Learned Mage",
    type: "Mage",
    requirements: [],
    requirementsDescription: "no other Mage traits the first time this trait is taken or the requirements for at least one upgrade for this trait for subsequent times this trait is taken",
    description:
      "The character can utilize magic they have studied. Choose one Magical Aptitude secondary skill to learn the Arcane Powers and any cantrips associated with it.",
    upgrades: {
      multidisciplinaryStudies: {
        displayName: "Multidisciplinary Studies",
        type: "Add-on",
        requirementsDescription: "At least novice proficiency in the  knowledge (academics) or knowledge (lore) skills.",
        description:
          "The character learns the Arcane Powers and cantrips associated with a Magical Aptitude secondary skill. This trait can be taken a number of times equal to one plus the product of the levels of proficiency in the knowledge (academics) and knowledge (lore) skills.",
        isCharacterEligible: character => {
          // TODO make this work
        }
      },
      experiencedSpellcrafter: {
        displayName: "Experienced Spellcrafter",
        type: "Add-on",
        requirementsDescription: "Knowledge of at least one spell and at least experienced proficiency in Magical Aptitude.",
        description:
          "Double the number of spells you know.",
        isCharacterEligible: character => {
          // TODO make this work
        }
      },
      finesseCasting: {
        displayName: "finesseCasting",
        type: "Add-on",
        requirementsDescription: "Knowledge of at least one spell and at least novice proficiency in Magical Aptitude.",
        description:
          "When you make a cast spell skill check you may choose to increase the difficulty by .",
        isCharacterEligible: character => {
          // TODO make this work
        }
      },
      practicedSpellcaster: {
        displayName: "Practiced Spellcaster",
        type: "Add-on",
        requirementsDescription: "At least novice proficiency in Magical Aptitude.",
        description:
          "The character may build and prepare one spell for each level of proficiency they have in the magical aptitude skill.",
        isCharacterEligible: character => {
          // TODO make this work
        }
      },
      more: {
        displayName: "TODO add a few more",
        type: "Add-on",
        requirementsDescription: ".",
        description:
          "Need at least one or two options that allow the caster to take in more arcane essense and spend the arcane essense in their system.",
        isCharacterEligible: character => {
          // TODO make this work
        }
      }
    },
    isCharacterEligible: character => {
      // TODO make this work
    },
    apply: character => {
      // TODO make this work.
    }
  }
};


console.log(`${Object.keys(traitsData).length} traits to select from.`);
console.log(Object.keys(traitsData));

module.exports = traitsData;
