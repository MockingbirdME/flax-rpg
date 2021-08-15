const skillChecks = {
  alertness: {
    displayName: "Alertness",
    primaryAttribute: ["Perception"],
    primarySkill: ["Awareness"],
    relevantSecondarySkills: ["Alertness"],
    aidingOthers:
      "none, multiple characters asked to make alertness checks should each make them individually.",
    description:
      "when there's something the character may not notice they should be asked to make this check to see if they become aware of it.",
    difficulty:
      "5+ various phenomena or the stealth check total of a sneaking/hiding character.",
    requiredSuccesses: "varies based on what it is they might be noticing.",
    failure:
      "the character fails to notice any signs of whatever they may have noticed, if they failed to notice danger they are surprised and flat footed when it acts.",
    nearSuccess: "the character notices some clue that might lead them to the item or alert them of the danger that triggered this check.",
    completeSuccess:
      "the character is aware of whatever caused the check to be made, if the check was made for some kind of danger they become aware of it at the last possible moment and are surprised when it acts.",
    additionalSuccesses:
      "for each additional success the character notices the danger or event sooner allowing for one additional round to react."
  },
  balance: {
    displayName: "Balance",
    primaryAttribute: ["Reflexes"],
    primarySkill: ["Personal Movement"],
    relevantSecondarySkills: ["Balance, Ride"],
    aidingOthers:
      "a character can assist another by allowing the second character to use their rank in the secondary skill however both character's only move at the rate of the slower of the two. A character can not assist more than one other character at a time. A character can not assist another if the skill check is not taken because of the character's, and their allies, action.",
    description:
      "The character is at risk of falling or otherwise losing their balance if they do not succeed this skill check. A character making this check in order to stay mounted may choose to use their ride secondary skill (animal handling) instead of their balance secondary skill (personal movement).",
    difficulty: "8-20+ depending on the effect.",
    requiredSuccesses: "N/A",
    failure:
      "the character falls forcing any allies helping them to make an additional check to stay up.",
    nearSuccess: "N/A",
    completeSuccess:
      "the character is able to move no more than their rank in the secondary skill hexes while still affected by what caused this skill check. If the character can move 0 hexes they are rendered prone if this is the first time they've made this skill check from the same effect.",
    additionalSuccesses:
      "increase the max distance moved by one hex per additional success."
  },
  befriendAnimal: {
    displayName: "Befriend Animal",
    primaryAttribute: ["Mind"],
    primarySkill: ["Animal Handling"],
    relevantSecondarySkills: ["Befriend"],
    aidingOthers: "none, character's make this skill check on their own.",
    description:
      "The character has encountered an animal that is not already friendly to them and has not already attacked them or fleed from them, this skill check is used to attempt to make the animal friendly to the character.",
    difficulty:
      "8-20+ depending on the animal in question, this should take into account the animal's temperment and social inteligence.",
    requiredSuccesses:
      "5-10 reduced by the character's rank in the secondary skill depending on the current state of the animal (full and comfortable would be lower while defending its young would be very high).",
    failure: "the character upsets the animal, it either flees or attacks.",
    nearSuccess:
      "the animal's attitude towards the character is not changed, any further attempts to befriend it have the required successes reduced by one plus the character's rank in the secondary skill",
    completeSuccess:
      "the animal's desposition shifts a little friendlier towards the character and will remain so for one hour.",
    additionalSuccesses:
      "increse the disposition change the animal experiences based on the number of additional successes. An animal that has been friendly towards the character for a number of days equal to the initial required successes to befriend it has become tamed, no further skill checks required to ensure it stays friendly to the character."
  },
  castSpellDependentMage: {
    displayName: "Cast Spell, Dependent Mage",
    primaryAttribute: ["Mind"],
    primarySkill: ["Magical Aptitude"],
    relevantSecondarySkills: [],
    aidingOthers:
      "none, character's make this skill check on their own, see Group Arcane Manipulation for deatils on working together for more informaiton on group casting.",
    description: "the character casts a spell they know and have prepared.",
    difficulty: "based on the spell's difficulty.",
    requiredSuccesses: "based on spell's required successes.",
    failure:
      "the spell is cast as normal, the caster suffers twice the spells arcane dues and one fatigue.",
    nearSuccess:
      "the spell is cast as normal and the caster suffers one fatigue.",
    completeSuccess:
      "the spell is cast, the chaster may choose to  suffers one fatigue instead of arcane dues.",
    additionalSuccesses:
      "the spell is cast, the chaster may choose to  suffers one fatigue instead of arcane dues. After suffering the fatigue or arcane dues the caster gains two stamina for each additional success."
  },
  castSpellLearnedMage: {
    displayName: "Cast Spell, Learned Mage",
    primaryAttribute: ["Mind"],
    primarySkill: ["Magical Aptitude"],
    relevantSecondarySkills: [],
    aidingOthers:
      "none, character's make this skill check on their own, see Group Arcane Manipulation for deatils on working together for more informaiton on group casting.",
    description: "the character casts a spell they know and have prepared.",
    difficulty: "based on the spell's difficulty.",
    requiredSuccesses: "based on spell's required successes.",
    failure:
      "the spell fizzles and is not cast, the character suffers the full arcane dues for the spell and one level of arcane scarring.",
    nearSuccess:
      "the caster may choose to suffer only half the spell's arcane dues and allow the spell to fail, or casts the spell as normal and gains a level of arcane scarring.",
    completeSuccess:
      "the spell is cast as expected with no additional effects.",
    additionalSuccesses:
      "the spell is cast and its arcane dues are reduced by two for each additional success."
  },
  castSpellNaturalMage: {
    displayName: "Cast Spell, Natural Mage",
    primaryAttribute: ["Mind"],
    primarySkill: ["Magical Aptitude"],
    relevantSecondarySkills: [],
    aidingOthers:
      "none, character's make this skill check on their own, see Group Arcane Manipulation for deatils on working together for more informaiton on group casting.",
    description: "the character casts a spell they know and have prepared.",
    difficulty: "based on the spell's difficulty.",
    requiredSuccesses: "based on spell's required successes.",
    failure:
      "the spell fizzles and is not cast, the character suffers no arcane dues for the spell but gains one level of arcane scarring.",
    nearSuccess:
      "the spell is cast as normal and the caster gains a level of arcane scarring.",
    completeSuccess:
      "the spell is cast as expected with no additional effects.",
    additionalSuccesses:
      "the spell is cast, if the caster didn't choose to gate the spell treat the caster's rank in their primary theme as if it were one higher for each additional success and increase the arcane dues by the same amount."
  },
  climb: {
    displayName: "Climb",
    primaryAttribute: ["Body"],
    primarySkill: ["Personal Movement"],
    relevantSecondarySkills: ["Climb"],
    aidingOthers:
      "a character can assist another by allowing the second character to use their rank in the secondary skill however both character's only move at the rate of the slower of the two. A character can not assist more than one other character at a time.",
    description:
      "from a well limbed oak tree to a stony cliff face with few handholds a climb skill check is what allows a character to scale any climbable surface.",
    difficulty:
      "the skill check's difficulty is what's required to not fall while climbing.",
    requiredSuccesses:
      "the required number of additional successes needed to make any progress during the climb not the difficulty to fully ascend the tree/wall/cliff/etc. that they're attempting to climb.",
    failure:
      "the character loses their grip and falls any distance already climbed, or fails to make any progress if they are still grounded.",
    nearSuccess:
      "the character ascends a number of hexes equal to the character's secondary skill rank.",
    completeSuccess:
      "the character ascends a number of hexes equal to one plus the character's secondary skill rank.",
    additionalSuccesses:
      "each additional success rolled increases the distance the character climbs by one hex."
  },
  craft: {
    displayName: "Craft",
    primaryAttribute: ["Mind"],
    primarySkill: ["Craft(any)"],
    relevantSecondarySkills: ["varies"],
    aidingOthers: "",
    description: "",
    difficulty: "",
    requiredSuccesses: "",
    failure: "",
    nearSuccess: "",
    completeSuccess: "",
    additionalSuccesses: ""
  },
  gatherArcaneEnergy: {
    displayName: "Gather Arcane Energy",
    primaryAttribute: ["Mind"],
    primarySkill: ["Magical Aptitude"],
    relevantSecondarySkills: ["Gather Arcane Energy"],
    aidingOthers: "none, character's make this skill check on their own.",
    description:
      "the character manifests and stores raw arcane energy to be shaped and released later.",
    difficulty: "11",
    requiredSuccesses: "none",
    failure:
      "the character gathers no arcane energy and triggers any energy they are currently holding losing all held energy and suffering arcane dues equal to the arcane cost of the energy lost.",
    nearSuccess: "N/A",
    completeSuccess:
      "the character gathers arcane cost of arcane energy equal to their secondary skill rank.",
    additionalSuccesses:
      "each additional success increases the the arcane cost of energy gathered by one."
  },
  gatherInformation: {
    displayName: "Gather Information",
    primaryAttribute: [""],
    primarySkill: [""],
    relevantSecondarySkills: [""],
    aidingOthers: "",
    description: "",
    difficulty: "",
    requiredSuccesses: "",
    failure: "",
    nearSuccess: "",
    completeSuccess: "",
    additionalSuccesses: ""
  },
  hideSneak: {
    displayName: "Hide/Sneak",
    primaryAttribute: ["Reflexes", "Perception"],
    primarySkill: ["Stealth"],
    relevantSecondarySkills: ["Hide", "Sneak"],
    aidingOthers: "none, characters make this skill check on their own.",
    description:
      "keeping oneself hidden from prying eyes and keen ears, a character attempting to move while sneaking gains a penalty die to this skill check unless they move at half speed or less.",
    difficulty:
      "10 + a bonus equal to the *perception* plus rank in the *awareness skill* plus rank in the *alertness secondary skill (awareness)*. This number of successes needed is compared individually for every character that may notice the sneaking character all using the same skill check.",
    requiredSuccesses: "none",
    failure:
      "the character accidentally draws attention to themselves being noticed immediately.",
    nearSuccess: "N/A",
    completeSuccess: "the character is not noticed.",
    additionalSuccesses:
      "the character does not need to make a stealth check for one additional round to stay hidden provided their situation does not change (they don't take another action that might draw attention to themselves and no other character draws attention to them)."
  },
  holdBreath: {
    displayName: "Hold Breath",
    primaryAttribute: ["Body"],
    primarySkill: ["Physical Conditioning"],
    relevantSecondarySkills: ["Hold Breatjh"],
    aidingOthers: "none, character's make this skill check on their own.",
    description:
      "the character is under water or otherwise unable to freely take breaths this skill check details how long they have before they can't fight the gasping reflex any longer.",
    difficulty: "10",
    requiredSuccesses: "none",
    failure:
      "the character gasps, breathing in whatever substance is around them.",
    nearSuccess: "N/A",
    completeSuccess:
      "the character holds their breath for 1 plus their secondary skill rank turns, reduced by one turn each time they suffer 5 for more stamina damage or spend more than 3 stamina in one turn.",
    additionalSuccesses:
      "each additional success increases the number of rounds the character can hold their breath for."
  },
  investigateArea: {
    displayName: "Investigate Area",
    primaryAttribute: ["Perception"],
    primarySkill: ["Awareness"],
    relevantSecondarySkills: ["Investigate"],
    aidingOthers:
      "Multiple character's can work together allowing for one skill check to be made by the character with the highest skill and treat their secondary skill rank as one higher than the character with the highest rank.",
    description:
      "the character looks for information in an area related to a specific topic declared by the player.",
    difficulty: "set by the GM based on how difficult the clues are to find.",
    requiredSuccesses:
      "if there's more than one potential clue the GM will set a number of required successes for various additional clues.",
    failure:
      "no clue was found, the character may not try again without additional help.",
    nearSuccess:
      "N/A, while this skill check does have required successes they are for determining additional found clues.",
    completeSuccess:
      "the easiest to find clue was discovered by the character. Add the character's secondary skill rank as extra successes for finding additional clues.",
    additionalSuccesses:
      "the number of additional successes will determine how many additional clues are found."
  },
  jump: {
    displayName: "Jump",
    primaryAttribute: [""],
    primarySkill: [""],
    relevantSecondarySkills: [""],
    aidingOthers: "",
    description: "",
    difficulty: "",
    requiredSuccesses: "",
    failure: "",
    nearSuccess: "",
    completeSuccess: "",
    additionalSuccesses: ""
  },
  keepWatch: {
    displayName: "Keep Watch",
    primaryAttribute: [""],
    primarySkill: [""],
    relevantSecondarySkills: [""],
    aidingOthers: "",
    description: "",
    difficulty: "",
    requiredSuccesses: "",
    failure: "",
    nearSuccess: "",
    completeSuccess: "",
    additionalSuccesses: ""
  },
  magicAttack: {
    displayName: "Magic Attack",
    primaryAttribute: ["Mind"],
    primarySkill: ["Magical Aptitude"],
    relevantSecondarySkills: ["Arcane Targeting"],
    aidingOthers: "none, character's make this skill check on their own.",
    description:
      "the character makes an attack with a manifestable arcane effect against a target in its range.",
    difficulty: "equal to the target's defense.",
    requiredSuccesses: "equal to the target's magic defense bonus.",
    failure:
      "the attack misses, if there is one or more other characters in melee with the defender or behind the defender and in range of the attack randomize between them and roll 2d10 if the result is equal to or greater than their defense they are struck by the attack as if it hit them with no additional successes.",
    nearSuccess:
      "the attack was resisted by the target with no further effect.",
    completeSuccess:
      "the target is affected by the spell, apply the effects of the manifested spell.",
    additionalSuccesses:
      "the target suffers additional effects based on the spell."
  },
  meleeAttack: {
    displayName: "Melee Attack",
    primaryAttribute: ["Reflexes"],
    primarySkill: ["Melee Combat"],
    relevantSecondarySkills: ["Specific attack type"],
    aidingOthers: "none, character's make this skill check on their own.",
    description:
      "the character makes an attack with a melee weapon or their body against a target in their reach.",
    difficulty: "equal to the target's defense.",
    requiredSuccesses: "equal to the target's melee defense bonus.",
    failure: "the attack misses.",
    nearSuccess:
      "the attack was parried, dodged, or blocked; the attack deals no damage but the defender suffers one point of damage (this damage can not inflict a wound, instead leaving the character at one stamina if that would normally occur).",
    completeSuccess:
      "the target is hit, apply the effects of a hit with the attack/weapon.",
    additionalSuccesses:
      "the target suffers additional effects based on the attack/weapon."
  },
  pickLocks: {
    displayName: "Pick Locks",
    primaryAttribute: ["Perception", "Mind"],
    primarySkill: ["Legerdemain"],
    relevantSecondarySkills: ["Pick Locks"],
    aidingOthers: "none, character's make this skill check on their own.",
    description:
      "using a set of lockpicks to try and get a lock to open up without its key.",
    difficulty:
      "1-15 depending on the lock and reduced by their rank in the secondary skill.",
    requiredSuccesses: "10",
    failure:
      "the character can not pick this lock, they may not try again for one full day.",
    nearSuccess:
      "the character fails to pick the lock after 10 rounds but may try again reducing the skill check's required successes by their rank in the secondary skill to a minimum of zero.",
    completeSuccess:
      "the character succsefully picks the lock after 10 rounds.",
    additionalSuccesses:
      "reduce the number of rounds it took the character to pick the lock by one."
  },
  remainConscious: {
    displayName: "Remain Conscious",
    primaryAttribute: ["Body"],
    primarySkill: ["Physical Conditioning"],
    relevantSecondarySkills: ["Remain Concious"],
    aidingOthers: "none, character's make this skill check on their own.",
    description:
      "the character is suffering some effect that is likely to render them unconscious, the skill check is to avoid this effect.",
    difficulty:
      "varies by the effect, increases by one on subsequent checks as long as the effect persists.",
    requiredSuccesses: "none",
    failure: "the character is unconscious.",
    nearSuccess: "N/A",
    completeSuccess:
      "the character remains conscious and doesn't need to check again for a number of rounds equal to their secondary skill rank.",
    additionalSuccesses:
      "each additional success increases the number of rounds before the character needs to check again."
  },
  rangedAttack: {
    displayName: "Ranged Attack",
    primaryAttribute: ["Perception"],
    primarySkill: ["Ranged Combat"],
    relevantSecondarySkills: ["Specific ranged attack type"],
    aidingOthers: "none, character's make this skill check on their own.",
    description:
      "the character makes an attack with a ranged weapon or spell against a target in its range.",
    difficulty: "equal to the target's defense.",
    requiredSuccesses: "equal to the target's ranged defense bonus.",
    failure:
      "the attack misses, if there is one or more other characters in melee with the defender or behind the defender and in range of the attack randomize between them and roll 2d10 if the result is equal to or greater than their defense they are struck by the attack as if it hit them with no additional successes.",
    nearSuccess:
      "the attack was avoided by the target's with no further effect.",
    completeSuccess:
      "the target is hit, apply the effects of a hit with the attack/weapon.",
    additionalSuccesses:
      "the target suffers additional effects based on the attack/weapon."
  },
  repair: {
    displayName: "Repair",
    primaryAttribute: [""],
    primarySkill: [""],
    relevantSecondarySkills: [""],
    aidingOthers: "",
    description: "",
    difficulty: "",
    requiredSuccesses: "",
    failure: "",
    nearSuccess: "",
    completeSuccess: "",
    additionalSuccesses: ""
  },
  searchArea: {
    displayName: "Search Area",
    primaryAttribute: ["Perception"],
    primarySkill: ["Awareness"],
    relevantSecondarySkills: ["Search"],
    aidingOthers:
      "Multiple character's can work together allowing for one skill check to be made by the character with the highest skill and treat their secondary skill rank as one higher than the character with the highest rank.",
    description:
      "the character searches an area for money, valuables, other specific items of interest, or hiding characters.",
    difficulty:
      "set by the GM based on how difficult the items/characters that could be found are to find.",
    requiredSuccesses:
      "if there's more than one potential item/loot/character to find the GM will set a number of required successes for various additional searched for things.",
    failure:
      "no item was found, the character may not try again without additional help.",
    nearSuccess:
      "N/A, while this skill check does have required successes they are for determining additional found items/characters.",
    completeSuccess:
      "the easiest to find item/characters was discovered by the character. Add the character's secondary skill rank as extra successes for finding additional items/characters.",
    additionalSuccesses:
      "the number of additional successes will determine how many additional items/characters are found."
  },
  senseMotive: {
    displayName: "Sense Motive",
    primaryAttribute: ["Perception", "Mind"],
    primarySkill: ["Awareness"],
    relevantSecondarySkills: ["Sense Motive"],
    aidingOthers: "",
    description: "",
    difficulty: "",
    requiredSuccesses: "",
    failure: "",
    nearSuccess: "",
    completeSuccess: "",
    additionalSuccesses: ""
  },
  slightOfHand: {
    displayName: "Slight of Hand",
    primaryAttribute: ["Reflexes"],
    primarySkill: ["Legerdemain"],
    relevantSecondarySkills: ["Slight of Hand"],
    aidingOthers:
      "a character can help misdirect a target's attention reducing the difficulty for the light of hand skill check by one plus the assisting character's rank legerdemain; a GM may increase this bonus based on how the aiding character roleplays the distraction.",
    description:
      "moving faster than the eye can see, or moving where the eye isn't looking, this skill check can be used to pickpocket a tartet, quickly hide an object, or otherwise perform simple trickery.",
    difficulty:
      "1-15 depending on the the task at hand and reduced by their rank in the secondary skill and modified by the target's reflexes and perception stats.",
    requiredSuccesses:
      "equal to the sum of the target's ranks in the awareness primary skill and alertness secondary skill (awareness).",
    failure:
      "the character fails to achieve their result and the target knows they tried.",
    nearSuccess:
      "the character achieves their desired result but he target is aware of it.",
    completeSuccess:
      "the character achieves their desired result and characters other than the target who were paying attention may make an alertness skill check with a difficulty equal to the sum of this skill check's difficulty and requried successes to see if they noticed the slight of hand.",
    additionalSuccesses:
      "increase the difficulty of the prompted alertness check by one for each additional success."
  },
  sprint: {
    displayName: "Sprint",
    primaryAttribute: ["Body", "Reflexes"],
    primarySkill: ["Personal Movement"],
    relevantSecondarySkills: ["Run"],
    aidingOthers:
      "none, multiple characters participating in a pursuit must each make separate flee/pursuit skill checks.",
    description:
      "when a character is attempting to cover a large distance as quickly as possible they are likely to need to make this skill check. Each point of movement increase from this skill check is equal to whatever unit of measurement the character is already moving in when the skill check is made.",
    difficulty: "11",
    requiredSuccesses: "0-10+ depending on terrain.",
    failure:
      "the character trips and falls, becoming prone at the end of the actions movement.",
    nearSuccess:
      "the character increases their movement by their secondary skill rank.",
    completeSuccess:
      "the character increases their movement by one, plus their secondary skill rank.",
    additionalSuccesses:
      "increases the character's movement by one per additional success."
  },
  swim: {
    displayName: "Swim",
    primaryAttribute: ["Body"],
    primarySkill: ["Personal Movement"],
    relevantSecondarySkills: ["Swim"],
    aidingOthers:
      "a character can assist another by allowing the second character to use their rank in the secondary skill however both character's only move at the rate of the slower of the two. A character can not assist more than one other character at a time.",
    description:
      "making headway through water and, more importantly, not drowning.",
    difficulty:
      "8-20+ depending on the downward pull in the water, riptides, storms, and magic can all increase this difficulty.",
    requiredSuccesses:
      "0-5 depending on the movement of the water, increased by current, non-submerging whirlpools, and heavy winds.",
    failure:
      "the character makes no progress towards their goal and loses 5 stamina.",
    nearSuccess:
      "the character treads water and is able to move a number of hexes equal to their secondary skill rank, they also lose 1 stamina.",
    completeSuccess:
      "the character moves up to one plus their rank in the secondary skill hexes.",
    additionalSuccesses:
      "increase the distance the character swims by up to one hex."
  },
  trainCommandAnimal: {
    displayName: "Train/Command Animal",
    primaryAttribute: ["Mind"],
    primarySkill: ["Animal Handling"],
    relevantSecondarySkills: ["Train", "Ride"],
    aidingOthers:
      "two or more characters can work together to train, but not command, an animal; when doing so the character making this skill check may use the highest primary attribte, primary skill rank, and secondary skill rank of all characters participating.",
    description:
      "the character is attempting to train an animal to obey a specific command or attempting to command an animal to perform an action that it has not been fully trained to perform. A character attempting a command skill check takes one action point or a few seconds, while a character attempting to train an animal must spend at least an hour per command they are trying to train. If this skill check is made to command a mount the character is riding they may use their ride secondary skill.",
    difficulty:
      "8-20+ depending on the animal in question, this should take into account the animal's temperment and social inteligence.",
    requiredSuccesses:
      "5-10 reduced by the character's rank in the secondary skill depending on the temperment of the animal.",
    failure:
      "the character trains bad behavior into the animal, adding a penalty die to all attempts to train or command the desired behavior until the animal is trained in the same behavior is trained with a completeSuccess.",
    nearSuccess:
      "the animal is begining to understand the command, any further attempts to train this command or command it have the required successes reduced by one plus the character's rank in the secondary skill",
    completeSuccess:
      "the animal has become familiar with the command and no skill check is required to get them to perform it for one day.",
    additionalSuccesses:
      "increse the duration for how long the animal will retain the trained command for by a day per additional success. An animal that has been trained in a command for a number of days equal to the initial required successes to befriend it has become permenently trained and no further command skill checks are required unless there's specific circumstances that would cause the animal to not obey, like issuing the 'sic' command at a person the animal is friendly with, or the 'come' command while the animal is currently being given treats."
  },
  tumble: {
    displayName: "Tumble",
    primaryAttribute: ["Reflexes"],
    primarySkill: ["Personal Movement"],
    relevantSecondarySkills: ["Tumbling"],
    aidingOthers: "none, character's make this skill check on their own.",
    description:
      "damage from falling from a great height or tumbling down a slope may be reduced with a successful skill check.",
    difficulty: "8",
    requiredSuccesses: "N/A",
    failure:
      "the character gains their rank in the secondary skill damage resistance to the falling damage.",
    nearSuccess: "N/A",
    completeSuccess:
      "the character gains one plus their rank in the secondary skill damage resistance to the falling damage; if the character suffers no damage they may end the fall/tumble kneeling instead of prone.",
    additionalSuccesses:
      "the character increases their damage resistance to the fall damage by one per additional success; if the character suffers no damage they may end the fall/tumble standing instead of prone."
  }
};

module.exports = skillChecks;
