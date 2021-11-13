const primaryAttributes = {
  body: {
    description: "a character’s strength, stamina, and toughness."
  },
  reflexes: {
    description: "how quickly a character moves or reacts."
  },
  perception: {
    description: "how well tuned the character's senses are."
  },
  mind: {
    description: "a character’s learning and mental discipline."
  }
};

const secondaryAttributes = {
  armorValue: {
    displayName: "Armor Value",
    description:
      "The difficulty to pierce the character's flesh with penetrating weapons, if the damage from a penetrating weapon is less than this value the weapon inflicts concussive damage instead.",
    baseValue: "0"
  },
  defenseBonusMental: {
    displayName: "Defense Bonus, Mental",
    description:
      "A value added to a character’s defense against arcanely targeted attacks and other mind altering effects.",
    baseValue: "mind stat + ranks in Discipline."
  },
  defenseBonusMelee: {
    displayName: "Defense Bonus, Melee",
    description:
      "A value added to a character’s defense against melee attacks they are aware of.",
    baseValue: "reflexes stat + ranks in melee combat - size."
  },
  defenseBonusRanged: {
    displayName: "Defense Bonus, Ranged",
    description:
      "A value added to a character’s defense against ranged attacks and other projectiles they are aware of.",
    baseValue: "reflexes stat + ranks in awareness - size."
  },
  initiative: {
    displayName: "Initiative",
    description: "A measure of how quickly the character acts.",
    baseValue:
      "sum of the character's reflexes, perception, and mind attributes and ranks in awareness, discipline, and personal movement primary skills."
  },
  reach: {
    displayName: "Reach",
    description: "",
    baseValue: "0 + size if positive."
  },
  resistanceConcussive: {
    displayName: "Resistance (concussive)",
    description:
      "The amount by which concusive damage is reduced when suffered by this character.",
    baseValue: "0 + body if positive + size if positive."
  },
  resistanceDamageType: {
    displayName: "Resistance (damage type)",
    description:
      "The amount by which the specified damage type is reduced when suffered by this character.",
    baseValue: "0 for each other damage type."
  },
  size: {
    displayName: "Size",
    description: "How large the character is.",
    baseValue: "set by the character's strain."
  },
  speed: {
    displayName: "Speed",
    description: "How quickly the character moves.",
    baseValue: "set by strain plus ranks in the personal movement skill."
  },
  woundsMax: {
    displayName: "Wounds, Max",
    description:
      "The total number of wounds a character may suffer before they are in danger of dying from them.",
    baseValue:
      "set by the character's _character type_ trait, for adventurers 3."
  }
};

const resourceAttributes = {
  defense: {
    displayName: "Defense",
    description:
      "The amount of defense a character has.",
    uses:
      "Attacks made against a character are compared to the character's current defense.",
    baseValue: "8 + perception + mind + reflexes + ranks in the personal defense skill."
  },
  luck: {
    displayName: "Luck",
    description:
      "The total amount of luck a character has.",
    uses: "Luck can be spent in place of any other resource. Additionally, you can spend one luck to reroll one die in a skill check you just made, or one max luck to reroll any number of dice in the skill check, no more than one luck can be spent for a given skill check.",
    baseValue:
      "1."
  },
  stamina: {
    displayName: "Stamina",
    description:
      "The total amount of stamina a character has.",
    uses: "Stamina is used for fuel various actions a character may take as they push themselves to their limits with acts of arcane or physical prowes. Max stamina is also reduced when the character suffers physical damage or is otherwise drained of energy.",
    baseValue:
      "3 + twice body (if positive) or minus body if negative (minimum 1)."
  },
  willpower: {
    displayName: "Willpower",
    description:
      "The total amount of willpower a character has.",
    uses: "Effects that affect a characters mind can only be applied if the target's willpower is low enough, other effects ware at the targets mind reducing their willpower. Willpower can also be spent by a character when they take the focus action.",
    baseValue:
      "3 + mind, minimum 1."
  }
};

module.exports = { primaryAttributes, secondaryAttributes, resourceAttributes };
