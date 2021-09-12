const arcaneEffectsData = {
  power: {
    displayName: "",
    cost: 1,
    requiresTheme: false,
    prohibitedToMageTypes: false,
    permittedMageTypes: [],
    availableForCantrips: true,
    availableForCrafting: false,
    availableForSpells: true,
    limitedType: false,
    otherLimitation: null,
    description: "a character’s strength, stamina, and toughness.",
    additionalCost: null
  },
  componentsLavishConsumable: {
    displayName: "Components, Lavish Consumable",
    cost: -3,
    requiresTheme: false,
    prohibitedToMageTypes: false,
    permittedMageTypes: [],
    availableForCantrips: true,
    availableForCrafting: false,
    availableForSpells: true,
    limitedType: "Consumable",
    otherLimitation: null,
    description:
      "casting the spell requires the caster to speak loudly, have both hands free or holding arcane focuses, and to provide arcane components worth at least ???x250 pennies that are consumed by the casting.",
    additionalCost: null
  },
  componentsExpensiveConsumable: {
    displayName: "Components, Expensive Consumable",
    cost: -2,
    requiresTheme: false,
    prohibitedToMageTypes: false,
    permittedMageTypes: [],
    availableForCantrips: true,
    availableForCrafting: false,
    availableForSpells: true,
    limitedType: "Consumable",
    otherLimitation: null,
    description:
      "casting the spell requires the caster to speak loudly, have both hands free or holding arcane focuses, and to provide arcane components worth at least ???x10 that are consumed by the casting.",
    additionalCost: null
  },
  componentsBasicConsumable: {
    displayName: "Components, Basic Consumable",
    cost: -1,
    requiresTheme: false,
    prohibitedToMageTypes: false,
    permittedMageTypes: [],
    availableForCantrips: true,
    availableForCrafting: false,
    availableForSpells: true,
    limitedType: "Consumable",
    otherLimitation: null,
    description:
      "casting the spell requires the caster to speak loudly, have both hands free or holding arcane focuses, and to provide arcane components worth at least ??? that are consumed by the casting.",
    additionalCost: null
  },
  componentsStandard: {
    displayName: "Components, Standard",
    cost: 0,
    requiresTheme: false,
    prohibitedToMageTypes: false,
    permittedMageTypes: [],
    availableForCantrips: true,
    availableForCrafting: false,
    availableForSpells: true,
    limitedType: "Consumable",
    otherLimitation: null,
    description:
      "casting the spell requires the caster to speak loudly and have both hands free or holding arcane focuses.",
    additionalCost: null
  },
  componentsSimple: {
    displayName: "Components, Simple",
    cost: 1,
    requiresTheme: false,
    prohibitedToMageTypes: false,
    permittedMageTypes: [],
    availableForCantrips: true,
    availableForCrafting: false,
    availableForSpells: true,
    limitedType: "Consumable",
    otherLimitation: null,
    description:
      "casting the spell requires the caster to speak at a regular volume and have one hand free or holding an arcane focus, or to speak loudly with both hands occupied, or have both hands free and not speak at all.",
    additionalCost: null
  },
  componentsLimited: {
    displayName: "Components, Limited",
    cost: 2,
    requiresTheme: false,
    prohibitedToMageTypes: false,
    permittedMageTypes: [],
    availableForCantrips: true,
    availableForCrafting: false,
    availableForSpells: true,
    limitedType: "Consumable",
    otherLimitation: null,
    description:
      "casting the spell requires the caster to speak at a whisper or have one hand free or holding an arcane focus.",
    additionalCost: null
  },
  componentsNone: {
    displayName: "Components, None",
    cost: 3,
    requiresTheme: false,
    prohibitedToMageTypes: false,
    permittedMageTypes: [],
    availableForCantrips: true,
    availableForCrafting: false,
    availableForSpells: true,
    limitedType: "Consumable",
    otherLimitation: null,
    description:
      "casting the spell requires no physical action from the caster.",
    additionalCost: null
  },
  delayNone: {
    displayName: "Delay, None",
    cost: -1,
    requiresTheme: false,
    prohibitedToMageTypes: false,
    permittedMageTypes: [],
    availableForCantrips: false,
    availableForCrafting: false,
    availableForSpells: true,
    limitedType: "Delay",
    otherLimitation: null,
    description:
      "the spell must be triggered via throwing, manifesting, touching, etc. as the caster's very next action after, and on the same turn, as casting.",
    additionalCost: null
  },
  delayStandard: {
    displayName: "Delay, Standard",
    cost: 0,
    requiresTheme: false,
    prohibitedToMageTypes: false,
    permittedMageTypes: [],
    availableForCantrips: true,
    availableForCrafting: true,
    availableForSpells: true,
    limitedType: "Delay",
    otherLimitation: null,
    description:
      "the spell must be triggered via throwing, manifesting, touching, etc. before the end of the casters next turn or it is lost.",
    additionalCost: null
  },
  delayExtended: {
    displayName: "Delay, Extended",
    cost: 1,
    requiresTheme: false,
    prohibitedToMageTypes: false,
    permittedMageTypes: [],
    availableForCantrips: false,
    availableForCrafting: false,
    availableForSpells: true,
    limitedType: "Delay",
    otherLimitation: null,
    description:
      "the spell must be triggered via throwing, manifesting, touching, etc. within a minute after casting or it is lost.",
    additionalCost: null
  },
  durationBasic: {
    displayName: "Duration, Basic",
    cost: 1,
    requiresTheme: false,
    prohibitedToMageTypes: false,
    permittedMageTypes: [],
    availableForCantrips: true,
    availableForCrafting: true,
    availableForSpells: true,
    limitedType: false,
    otherLimitation:
      "a caster cannot have more duration effects ongoing at one time than one plus their mind, if positive.",
    description:
      "the non-character targeted damage effects of the cantrip, spell, or crafted effect remain in play until the end of the caster's next turn; additionally, if it is a cantrip or spell, the caster can spend one stamina on their turn that the cantrip, or spell would expire to have it continue functioning until the end of their next turn."
  },
  durationExtended: {
    displayName: "Duration, Extended",
    cost: "1",
    requiresTheme: false,
    prohibitedToMageTypes: false,
    permittedMageTypes: [],
    availableForCantrips: true,
    availableForCrafting: true,
    availableForSpells: true,
    limitedType: false,
    otherLimitation:
      "a spell, cantrip, or effect must already have a duration effect.",
    description:
      "the cantrip, spell, or crafted effect lasts for an additional round (if the caster spends stamina to continue the effect it still only lasts for one additional round).",
    additionalCost:
      "each additional effect doubles the initial duration (one additional cost results in 4 rounds for the initial effect, two additional cost results in 8, etc.)."
  },
  duplicate: {
    displayName: "Duplicate",
    cost: 3,
    requiresTheme: false,
    prohibitedToMageTypes: false,
    permittedMageTypes: [],
    availableForCantrips: true,
    availableForCrafting: false,
    availableForSpells: true,
    limitedType: false,
    otherLimitation: null,
    description:
      "two instances of effect are created upon casting, they must be triggered separately.",
    additionalCost:
      "every additional arcane cost spent on this power increases the number of instances of the effect by one."
  },
  extendedRangeBasic: {
    displayName: "Extended Range, Basic",
    cost: 1,
    requiresTheme: false,
    prohibitedToMageTypes: false,
    permittedMageTypes: [],
    availableForCantrips: true,
    availableForCrafting: false,
    availableForSpells: true,
    limitedType: false,
    otherLimitation: null,
    description: "increase the effect's range and range increment by one hex.",
    additionalCost:
      "further increase the effect's range and range increment by one hex for every additional arcane cost spend on this effect"
  }
};

module.exports = arcaneEffectsData;
