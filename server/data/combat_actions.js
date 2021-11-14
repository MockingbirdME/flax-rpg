const combatActionsData = {
  walk: {
    displayName: "Walk",
    type: "Movement",
    actionPointCost: 1,
    staminaCost: 0,
    description:
      "Move up to 3 hexes, this movement provokes free attacks when the character moves from a hex that is threatened by an enemy to one that is not."
  },
  dash: {
    displayName: "Dash",
    type: "Movement",
    actionPointCost: 1,
    staminaCost: 1,
    description:
      "Move up to the character's speed in hexes, this movement provokes free attacks when the character moves out of a threatened hex."
  },
  sprint: {
    displayName: "Sprint",
    type: "Movement",
    actionPointCost: 3,
    staminaCost: 2,
    description:
      "Move up to the three times the character's speed in hexes then make a *sprint* skill check and move up to one additional hex for every point by which the skill check increased their movement, this movement provokes free attacks when the character moves into or out of of a threatened hex."
  },
  climb: {
    displayName: "Climb",
    type: "Movement",
    actionPointCost: 1,
    staminaCost: 1,
    description: ""
  },
  Jump: {
    displayName: "Jump",
    type: "Movement",
    actionPointCost: 1,
    staminaCost: 0,
    description: ""
  },
  swim: {
    displayName: "Swim",
    type: "Movement",
    actionPointCost: 1,
    staminaCost: 1,
    description: ""
  },
  basicAttack: {
    displayName: "Basic Attack",
    type: "Melee",
    actionPointCost: 1,
    staminaCost: 1,
    description:
      "Make an attack with a readied melee weapon. The character makes a *melee attack skill check* and applies the results."
  },
  bash: {
    displayName: "Bash",
    type: "Melee",
    actionPointCost: 1,
    staminaCost: 2,
    description:
      "Attempt to shove an opponent back with a brawling attack or a basic attack with a readied melee weapon with the bash keyword. The character makes a *melee attack skill check*. The skill check gains a penalty die if the character does not have at least one rank in the *bash secondary skill (melee combat)*. If the attack hits its damage is converted to concussive it if would have been otherwise, and the target is pushed back X hexes, where X is equal to the attacker's rank in the *bash secondary skill (melee combat)* hexes. Additional successes increase this knock back distance by an additional hex unless the movement has caused the target to hit a solid surface, such as a wall, in which case additional successes increase the attack's damage by one, this is instead of their normal effects. The total distance the target is knocked back is reduced by the sum of the target's *size*, if positive, and *body* stat. If the target was knocked back at least one plus their reflexes stat hexes they are rendered prone at the end of the knock back movement."
  },
  bullRush: {
    displayName: "Bull Rush",
    type: "Melee",
    actionPointCost: 2,
    staminaCost: 2,
    description:
      "Make a brawling attack or a basic attack with an equipped shield as you attempt to push the target back. The character makes a *melee attack skill check* and applies the results. The skill check gains one penalty die if the character does not have at least one rank in the *bull rush secondary skill (melee combat)* and the target's *melee defense bonus* does not benefit from shield or parry bonuses. If the attack hits the target is pushed back X hexes, where X is equal to the attacker's rank in the *bull rush secondary skill (melee combat)* hexes. Additional successes increase this knock back distance by an additional hex unless the movement has caused the target to hit a solid surface, such as a wall, in which case additional successes increase the attack's damage by one, this is instead of their normal effects. The total distance the target is knocked back is reduced by the sum of the target's *size*, if positive, and *body* stat. If the target was knocked back at least one plus their reflexes stat hexes they are rendered prone at the end of the knock back movement. The attacker travels with the target as they are knocked back and may, if they choose, end their movement up to their body stat hexes before the target does."
  },
  brawling: {
    displayName: "Brawling",
    type: "Melee",
    actionPointCost: 1,
    staminaCost: 1,
    description:
      "Make an attack with the character's fists, feet, or natural weapon. The character makes a *melee attack skill check* and applies the results. Increase this attacks damage by the character's rank in the *brawling secondary skill (melee combat)*."
  },
  disarm: {
    displayName: "Disarm",
    type: "Melee",
    actionPointCost: 1,
    staminaCost: 2,
    description:
      "Make a brawling attack or an attack with a readied melee weapon with the intent to disarm the target rather than harm them. The character makes a *melee attack skill check*. The skill check gains a penalty die if the character doesn't have at least one rank in the *disarm secondary skill (melee combat)*, an additional penalty die if the character is unarmed unless they have at least two ranks in both the *brawling secondary skill (melee combat)* and the *disarm secondary skill (melee combat)*, and an additional penalty die if the target is wielding their weapon in two hands. If the attack was performed unarmed and the skill check failed the attacker provokes a free attack from the defender. If the skill check succeeds it deals no damage and the targeted weapon is knocked to the ground at the target's feet, if the attack succeeded with at least 1 additional success the weapon can end up one hex away from the target in a direction of the attacker's choice + one extra hex for every two additional successes, if the attack was performed unarmed and succeeded by 5 minus the character's rank in the *disarm secondary skill (melee combat)* additional successes the attacking character may ready it as part of this attack."
  },
  distractingAttack: {
    displayName: "Distracting Attack",
    type: "Melee",
    actionPointCost: 1,
    staminaCost: 2,
    description:
      "Make a brawling attack or a basic attack with a readied meleey weapon with the intent to distract the target more than harm them. The character makes a *melee attack skill check* and applies the results. The skill check gains a penalty die if the character doesn't have at least one rank in the *distracting attack secondary skill (melee combat)*. On a near or complete success reduce the target's defense by one plus the character's rank in the *distracting attack secondary skill (melee combat)* against the next attack made against them before the begining of the attacker's next turn. If this attack would inflict a wound instead the target remains at one stamina."
  },
  flurryOfBlows: {
    displayName: "Flurry of Blows",
    type: "Melee",
    actionPointCost: 1,
    staminaCost: 2,
    description:
      "Make a brawling attack or an attack with a readied melee weapon. The character makes a *melee attack skill check*. The skill check gains one bonus die. If this attack hits ignore the character's body stat, if it's positive, for purposes of calculating damage. Ignore any additional successes from this skill check in excess of the character's rank in the *flurry of blows secondary skill (melee combat)*."
  },
  offHandAttack: {
    displayName: "Off-Hand Attack",
    type: "Melee",
    actionPointCost: 1,
    staminaCost: 1,
    description:
      "Make a brawling attack or an attack with a readied weapon with both the *light* and *one-handed* traits that the chararcter has not attacked with yet this turn. The character makes a *melee or ranged attack skill check* as appropriate to the weapon and applies the results. This skill check gains one penalty die unless the character has at least one rank in the *off-hand attack secondary skill (melee combat)* and ignores any penalty dice the character would have as a result of a multi-action penalty. Ignore any additional successes on this skill check in excess of the character's rank in the *off-hand attack secondary skill (melee combat)*. Limit once per turn."
  },
  powerAttack: {
    displayName: "Power Attack",
    type: "Melee",
    actionPointCost: 1,
    staminaCost: 2,
    description:
      "Make a brawling attack or an attack with a readied melee weapon. The character makes a *melee attack skill check*. This skill check has one penalty die added to it if the character does not have at least one rank in the *power attack secondary skill (melee combat)* and one penalty die added to it unless the character performed a dash action this turn immediately before making this attack. If the attack hits treat the character's body stat as one plus the character's rank in the *power attack secondary skill (melee combat)* higher than it is."
  },
  aim: {
    displayName: "Aim",
    type: "Ranged",
    actionPointCost: 2,
    staminaCost: 0,
    description:
      "The character selects one target they can see and is within range of a readied, loaded, ranged weapon; their next attack against that target get's a bonus to the skill check equal to one plus the character's rank in the *aim (ranged combat)* secondary skill. An aiming character that moves or takes any non ranged attack action that requires a skill check is no longer aiming."
  },
  load: {
    displayName: "Load",
    type: "Ranged",
    actionPointCost: "varies",
    staminaCost: "varies",
    description:
      "The character loads one a ranged weapon. The action point cost and stamina cost of this action vary based on the weapon being loaded."
  },
  looseShootFire: {
    displayName: "Loose/Shoot/Fire",
    type: "Ranged",
    actionPointCost: 1,
    staminaCost: 0,
    description:
      "Make an attack with a readied, loaded, ranged weapon. The character makes a *ranged attack skill check* and applies the results."
  },
  overwatch: {
    displayName: "Overwatch",
    type: "Ranged",
    actionPointCost: 1,
    staminaCost: 0,
    description:
      "The character chooses an area within the range of their readied, loaded, ranged weapon, readied throwable weapon, or cast, throwable spell. The area can be no larger than one plus their rank in the *overwatch (ranged combat)* secondary skill hexes. Until the beginning of the character's next turn they may spend their reaction to make a ranged attack against a target who enters or moves within the selected area."
  },
  throw: {
    displayName: "Throw",
    type: "Ranged",
    actionPointCost: 1,
    staminaCost: 1,
    description:
      "Make an attack with a readied throwable weapon or cast throwable spell. The character makes a *ranged attack skill check* and applies the results."
  },
  castCantrip: {
    displayName: "Cast Cantrip",
    type: "Magic",
    actionPointCost: "varies",
    staminaCost: 2,
    description:
      "Cast one cantrip the caster knows, its action point cost is determined by the cantrip's selected speed effect. If the cantrip has an action point cost of zero and a range of self it takes effect immediately, if it has an action point cost of zero and a range of manifest the caster may take a manifest spell action with an action point cost of zero as their next action this turn."
  },
  castSpell: {
    displayName: "Cast Spell",
    type: "Magic",
    actionPointCost: "varies",
    staminaCost: "varies",
    description:
      "Cast one spell the caster knows by making a cast spell skill check with a difficulty based on the spell being cast, if the skill check is successful the character suffers arcane dues as detailed on the spell. This action's action point cost is determined by the spell's selected speed effect. If the spell has an action point cost of zero and a range of self it takes effect immediately, if it has an action point cost of zero and a range of manifest the caster may take a manifest spell action with an action point cost of zero as their next action this turn."
  },
  manifestSpell: {
    displayName: "Manifest Spell",
    type: "Magic",
    actionPointCost: 1,
    staminaCost: 0,
    description:
      "Make an attack with a cast manifestable spell. The character makes a *magic attack skill check* and applies the results."
  },
  gatherArcaneEnergy: {
    displayName: "Gather Arcane Energy",
    type: "Magic",
    actionPointCost: 2,
    staminaCost: 0,
    description:
      "Make a *gather arcane energy skill check* applying its results. If the character stored any arcane energy from this skill check they store it until used, losing one stamina each round they hold it for and losing the gathered energy if they suffer any wounds while holding it (losing this energy causes the caster to suffer arcane dues equal to the amount of arcane cost stored)."
  },
  releaseArcaneEnergy: {
    displayName: "Release Arcane Energy",
    type: "Magic",
    actionPointCost: 1,
    staminaCost: 1,
    description:
      "The character safely reduces the amount of arcane cost they have stored as energy by up to one plus their rank in the *gather arcane energy (magical aptitude)* secondary skill."
  },
  shapeArcaneEnergy: {
    displayName: "Shape Arcane Energy",
    type: "Magic",
    actionPointCost: 1,
    staminaCost: 1,
    description: ""
  },
  steadyOneself: {
    displayName: "Steady Oneself",
    type: "Defensive",
    actionPointCost: 1,
    staminaCost: 0,
    description:
      "The character takes stock of their surroundings and steadies their balance. They regain defense equal to the sum of their ranks in the *awareness secondary skill* and *balance secondary skill* (minimum 1)."
  },
  defensiveStance: {
    displayName: "Defensive Stance",
    type: "Defensive",
    actionPointCost: 1,
    staminaCost: 0,
    description:
      "The character readies themselves to continue an extended melee. They gain a bonus to their melee defense until the begining of their next turn, this bonus is equal to their rank in the *parry secondary skill(personal defense)* if they are wielded a parrying weapon."
  },
  disengage: {
    displayName: "Disengage",
    type: "Defensive",
    actionPointCost: 1,
    staminaCost: 0,
    description:
      "The character carefully disengages from their opponent and moves carefully through the battlefield. All melee attacks made agasint the character gain a penalty die until the end of the character's turn."
  },
  dodge: {
    displayName: "Dodge",
    type: "Defensive",
    actionPointCost: 1,
    staminaCost: 0,
    description:
      "The character bobs and weaves, zig zags, and generally makes themselves a difficult target for ranged attacks. They gain a + 1 bonus to their ranged defense until the begining of their next turn, this bonus is increased by their rank in the *dodge secondary skill(personal defense)*."
  },
  restorationAction: {
    displayName: "Restoration Action",
    type: "Defensive",
    actionPointCost: 1,
    staminaCost: 0,
    description:
      "The character does their best to catch their breath and reposition themselves. They regain stamina equal to 2 plus their ranks in the *endurance secondary skill*."
  },
  focus: {
    displayName: "Focus",
    type: "Other",
    actionPointCost: "1",
    staminaCost: 0,
    description:
      "The character clears their mind and ignores all distractions, each skill roll they make this turn gains a focus bonus die to the check. When you take this action you may choose to spend one willpower to gain an additional focus bonus die to each skill check this round and may spend a max willpower to ignore status effects, such as fear and wounds, for remainder of the turn."
  },
  delayTurn: {
    displayName: "Delay Turn",
    type: "Other",
    actionPointCost: "All",
    staminaCost: 0,
    description:
      "This action can only be taken if the character has taken no other actions this turn and costs all of their action points. The character may reset their initiative to any value 1-10, if there are already one or more characters acting at that initiative they may choose where in the turn order amongs those characters they will act."
  },
  prepare: {
    displayName: "Prepare",
    type: "Other",
    actionPointCost: 1,
    staminaCost: 0,
    description:
      "The character surveys the battlefield and prepares themselves for their next action(s); doing so increases their current initiative by 2."
  },
  readyStowItem: {
    displayName: "Ready Stow Item",
    type: "Other",
    actionPointCost: 1,
    staminaCost: 0,
    description:
      "The character readies up to one weapon or item or up to one plus their rank in the *reload secondary skill (ranged combat)* pieces of ammunition or stows the same number of currently readied weapons/items or pieces of ammunition."
  }
};

module.exports = combatActionsData;
