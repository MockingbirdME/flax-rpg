const strains = {
  denja: {
    displayName: "Denja",
    quickDescription:
      "Denja are generally quick-witted and conversational, preferring to participate in battles of the mind rather than battles of the blade. Most people find it hard to dislike a Denja once they become acquainted; it is rare for a lord or landowner not to have at least one in their employment to aid in mediation. When encountered outside of a town or city, Denja rarely travel alone, in part because they get lonely easily, and in part because they make easy targets for bandits and highwaymen.",
    physicalAppearance:
      "Denja are short and reptilian in appearance. Rarely growing over four feet tall. Denja are covered with small flexible scales that are usually green or blue in color, with red and brown being less common; albinos also exist though this rare occurrence seems to affect only those spawned in the Bredth Bogs. Denja have three-fingered hands and three-toed feet; both types of phalanges end in small claws, their toes but not their fingers are webbed. Some Denja possess a thin skin flap that can fill the space in between their arms and legs; the skin displays a pair of vibrant eye patterns, but it also serves as a method of transportation if a Denja launches themselves from an elevated platform or tree.",
    history:
      "Denja are amongst the elder strains having been created by The Wood Mistress, Eightoo, in The First Days. They were created alongside the Garjants of the Bredth Bogs and still consider those behemoths to be their brethren. The Denja were the first strain to leave their ancestral homelands and be found by the Mablen; together, they created the first set of laws and the origins of the written word.",
    familySocialStructure:
      "Denja being social creatures, tend to live in groups consisting of many adults and any children they may have. The members of this household are likely to change over time, and it is not generally a major event in their lives to have one member join or leave the household at any given time. Denja children are considered to be part of the household they're born into and are raised collectively by the adults with whom they live; generally, they do not leave the household if their biological parents do.",
    breeding:
      "Every decade or so beginning at adulthood, a Denja female will lay a clutch of 3-8 eggs. If she's a member of a household, the eggs will be fertilized collectively by the males in the household, a process that, to outsiders, looks like the males emit a thin mist over the eggs. If the female is not part of a household, she will either leave her eggs to wither or give them to a household she deems worthy, very rarely a lone female may have her eggs fertilized by a group of males she trusts and raise hatchlings herself; it is considered necessary that multiple males fertilize eggs in order to give the offspring the greatest variety of interests and opportunities as they age; denja who follow a singular passion are often insulted by others being told they have but one father.",
    placeInSociety:
      "Denja can be found in just about any moderately sized town in Flax. They are social, well-liked, and friendly. Denja are rarely ambitious, and as such, it is uncommon to find them in positions of power unless they have been appointed to them by a member of another strain.",
    namingConventions:
      "Denja children are not given names by their parents or households. Instead, Denja are referred to by descriptions or pet names until they reach adulthood and leave the households they were hatched into. When they do venture out from their household, they select a name for themselves. A Denja's chosen name is often a description they wish to strive for, to those who do not speak Denja a shortened version, or simplified translation, if often used.",
    size: -1,
    speed: 3,
    attributeModifiers: {
      description: "-1 to body and reflexes, + 1 mind.",
      body: -1,
      reflexes: -1,
      perception: 0,
      mind: 1
    },
    apply: (character, options = {}) => {
      character._primaryAttributes.body -= 1;
      character._primaryAttributes.reflexes -= 1;
      character._primaryAttributes.mind += 1;
      character.updateVariable('size', -1);
      character.updateVariable('speed', 3);
    },
    strainTraits: {
      airSacks: {
        displayName: "Air Sacks",
        description:
          "the character can hold their breath for ten minutes before needing to make breath holding or remain conscious checks provided they had the opportunity to fill their air sacks before submerging.",
        apply: character => {
          character.addTraitAsNote({strainTrait: true, strainName: 'denja', traitName: 'airSacks'});
        }
      },
      clawsWebbedFeetTail: {
        displayName: "Claws, Webbed Feet, and Tail",
        description:
          "the character gains a bonus die on swim and climb skill checks.",
        apply: character => {
          character.addTraitAsNote({strainTrait: true, strainName: 'denja', traitName: 'clawsWebbedFeetTail'});
          character.updateSkillCheckModifier('swim', {dieModifier: 1});
          character.updateSkillCheckModifier('climb', {dieModifier: 1});
        }
      },
      glidingMembrain: {
        displayName: "Gliding Membrain",
        description:
          "the character may glide when falling as an action provided they are not wearing clothing or armor that prevents the membrane running from wrist to ankle from opening and are not encumbered. This action costs one action point and one stamina point and allows the character to move 10 hexes plus up to their rank in the *fly secondary skill (personal movement)* while falling 5 hexes; if the character is still in the air after this action is completed and they have any additional action points left on their turn they must continue to take this action or they will fall the remaining distance. If a character finds themselves falling outside of their turn they may use their reaction to take this action. Gliding can not be done if the character can not move the required 10 hexes, such as if falling down a narrow shaft or well.",
        apply: character => {
          character.addTraitAsNote({strainTrait: true, strainName: 'denja', traitName: 'glidingMembrain'});
        }
      },
      scales: {
        displayName: "Natural Armor, Scales",
        description:
          "the character has natural armor with *armor value* ??? and *resistance (concussive and penetrating)* 1",
        apply: character => {
          character.addArmor({armorName: "Natural Armor, Scales", armorValue: 3, resistances: {concussive: 1, penetrating: 1}});
        }
      },
      claws: {
        displayName: "Natural Weapon, clawed fingers and toes:",
        description:
          "the character's brawling attacks may inflict penetrating damage.",
        apply: character => {
          // TODO figure out how to natural weapon to weapon options.
          character.addTraitAsNote({strainTrait: true, strainName: 'denja', traitName: 'claws'});
        }
      }
    }
  },
  rhosk: {
    displayName: "Rhosk",
    quickDescription:
      "Originally natives to the Northern Desert, and though many have migrated south there are the two things that all Rhosk are skilled at: order and war. Rhosk in the north are usually associated with Shiver’s defenses in some capacity those found further south often feel a fealty to the north even when not actively working towards its benefit. Rhosk are known to be serious and stoic, though dangerous once angered, they often find themselves respected despite their lack of close personal friends. Rhosk rarely possess a sense of humor or irony and are falsely rumored to be unable to smile or laugh. Their stoicism and natural understanding of tactics makes Rhosk natural field commanders for any nations military.",
    physicalAppearance:
      "Ranging from seven to eight feet in height Rhosk look down on most other Strains, they stand straight and have broad shoulders and long arms. Their bodies are covered with downy feathers except for their shoulders, crown, and spine which sport much longer and darker, shaggy looking, feathers. Rhosk have slightly flat faces that tend to be lighter in color than their body down, which range in color from a deep brown to a russet to a pale light blue; their heads are crowned with tall, erect, ears that resemble those of a wolf. ",
    history:
      "Numbering amongst the younger strains of Flax the first Rhosk were carved from great blocks of ice by Shiver, the Northern Wind. Shiver created the Rhosk for the single purpose of guarding her domain from being settled or warred upon by the older strains; she taught them the secrets of stone and ice and as such the Rhosk became the first great builders on Flax.",
    familySocialStructure:
      "Rhosk leave their family homes earlier than most other strain's children do and carve out a life for themselves living alone when able. Most Rhosk eventually find a mate and when they do stay with them for life, and do not take another should their first mate perish.",
    breeding:
      "Mated Rhosk will lay, a single egg and once hatched nurture only that child until it is old enough to leave the household at which point they will often lay another egg and repeat this process. Unlike some strains Rhosk, once reaching maturity, can continue to breed for the rest of their lives.",
    placeInSociety:
      "Rhosk are rare outside of the northern mountains and steeps but tend to be considered valuable additions to southern towns due to their size, strength, and perceived ability to defend the town from harm. In larger towns and cities Rhosk tend to gather together, preferring each other's company to that of most other strains.",
    namingConventions:
      "Rhosk children are given a single name by their parents shortly after they've hatched. Rhosk names do not have specific meanings but tend to be composed of short syllables with hard consonants.",
    size: 1,
    speed: 4,
    attributeModifiers: {
      description: "+2 body.",
      body: 2,
      reflexes: 0,
      perception: 0,
      mind: 0
    },
    strainTraits: {
      coolTemperament: {
        displayName: "Cool Temperament",
        description:
          "the character gains a bonus die on all checks to resist fear."
      },
      greatStrength: {
        displayName: "Great Strength",
        description:
          "the character treats their size as one higher for the purpose of lifting and carrying capacity."
      },
      usedToTheCold: {
        displayName: "Used to the Cold",
        description: "the character gains three to their resistance (cold)."
      }
    }
  },
  sapeen: {
    displayName: "Sapeen",
    quickDescription:
      "Most often found living in towns and cities or on lands ruled by one Sapeen are one of the most prevalent strains on flax, can be found in any civilized area and are the most common single strain in most nations. Sapeen are amongst the most ambitious and adaptive of the strains, they are as eager to learn new sciences and trades as they are eager to expand the lands of their mother nation.",
    physicalAppearance:
      "Sapeen are bipedal, mostly hairless, creatures that range from five to six feet in height. Their skin is generally a tan or pink color with some families skin tone reaching almost a milk white. Sapeen hair ranges in color from black to white and brown to yellow to orange.",
    history:
      "The eldest of the strains created in the Second Days, Sapeen were created by Clursus, the Cleanser, who recognized the limitations of the elder strains and wished to create a more adaptive species to rule on Flax. With the help of the Mablen, Sapeen developed tribal societies that quickly spread to all inhabited corners of Flax.",
    familySocialStructure:
      "Sapeen families are very culture dependent, in Askelon it's common for a group of adults to cohabitate and raise any children collectively with children moving out only when they join another household as an adult, in Proto adults tend to pair off as a couple and live together with children leaving the home to live on their own when they reach adulthood, in the Grailic states the Sapeen families with money or influence tend to emulate the Torleni of the area while poorer families live in groups.",
    breeding:
      "Sapeen females are able to reproduce from a young age though it is generally not considered socially acceptable until their twenties. Like Centari they carry their children inside them for close to three seasons before giving life birth, usually to a single child though twins are considered a blessing as one of them will always be a natural mage.",
    placeInSociety:
      "Clursus may have created Sapeen to be adaptable so that they may rule but he made them so adaptable they ended up filling all niches of society. Sapeen are common in nearly all nations and rarely looked upon poorly.",
    namingConventions:
      "In Sapeen ruled nations they tend to have a given name followed by son/daughter of their father or descendent of their most noteworthy direct female ancestor (mother, mother's mother, etc.) some tracing their heritage back to great hero's of myth and legend. Outside of the Sapeen ruled nations (Askelon, Proto, The Free Isles, etc.) they tend to adopt the naming conventions of the upper class of wherever they live.",
    size: 0,
    speed: 4,
    attributeModifiers: {
      description: "+1 to any attribute.",
      body: 0,
      reflexes: 0,
      perception: 0,
      mind: 0,
      any: 1
    },
    options: [{name: 'bonusAttribute', displayName: "Bonus Attribute", options: [{value: 'body', displayName: 'Body'}, {value: 'reflexes', displayName: 'Reflexes'}, {value: 'perception', displayName: 'Perception'}, {value: 'mind', displayName: 'Mind'}]}],
    apply: (character, options = {}) => {
      if (options.bonusAttribute)
        character.modifyAttribute(options.bonusAttribute, 1);
      character.updateVariable('size', 0);
      character.updateVariable('speed', 4);
    },
    strainTraits: {
      highlyAdaptive: {
        displayName: "Highly Adaptive",
        description:
          "the character gains one additional trait during the _assign traits_ step of creation and can have one more _advanced_ trait than they could otherwise.",
        apply: character => {
          character._variables.extraEntitledTraits
            ? (character._variables.extraEntitledTraits += 1)
            : (character._variables.extraEntitledTraits = 1);
          character._variables.extraEntitledHeroicTraits
            ? (character._variables.extraEntitledHeroicTraits += 1)
            : (character._variables.extraEntitledHeroicTraits = 1);
        }
      }
    }
  },
  torleni: {
    displayName: "Tor'leni",
    quickDescription:
      "Technically a sub-strain of their 'Pure-Blooded' cousins, the Torleni that carry the blood of Shimmer in their veins are so much more common a sight throughout Flax it is not uncommon for the less educated not to know this. Teejee can be found in all the lands that once belonged to the Kingdom of Grail that they ruled and still possess most of the positions of power in the lands that once belonged to that, no fractured, kingdom.",
    physicalAppearance:
      "Two arms, two legs, and covered in scales is about the extent of how you can generalize a Torleni for the blood of Shimmer flows in their veins and they may alter their appearances individually to their will. Each Torleni shapes themselves as they see fit, gaining or loosing mass, growing claws or wings, spitting acid or fire, changing the color and pattern of their scales, and even the shape of their faces and sound of their voice. Torleni are truly the most diverse of strains in appearances.",
    history:
      "Torleni were created by Milnot, the mistress of the mountain, in the range dominated by Mount Milomb. In the first days Milnot was not the only Ohma to dwell amongst her children however; Shimmer, the changeling, unable to create a strain of his own, resided with the Torleni and mixed his blood with theirs until nearly all of Milnot's children were decedents of Shimmer as well. Some say that Shimmer still resides on Mount Milomb teaching and guiding the Torleni who reside in their ancestral birthplace.",
    familySocialStructure:
      "In their ancestral homeland, the Trail of Eyes, Torleni tend to live alone though in proximity to their neighbors and have a central area in each settled area where all young are raised together. In the Grailic states Torleni tend to live in households where one of them is in charge and some number of other, with lower social standing, taking care of their household and the young; these subservient Torleni are generally not permitted to breed until they've gone out and become the heads of their own households.",
    breeding:
      "Torleni are unique among the strains in that they do not require a partner to breed; they lay a clutch of 3-5, already fertilized eggs as often as they choose and generally raise the young themselves in in cooperation with others in their households.",
    placeInSociety:
      "Toleni are rare outside of The Trail of Eyes, which is populated almost exclusively by them and those members of other strains they've taken as slaves or the Grailic states where they are almost entirely members of the ruling class. Torleni elsewhere are generally mistrusted and feared due to their reputation as slavers and tyrants.",
    namingConventions:
      "In the Trail of Eyes Torleni tend to have a single given name and occasionally a title or description, in the Grailic states they have a given name, the name of their parent, occasionally a title or description, and a house affiliation and rank.",
    size: 0,
    speed: 0,
    attributeModifiers: {
      description: "",
      body: 0,
      reflexes: 0,
      perception: 0,
      mind: 0
    },
    strainTraits: {
      trait: {
        displayName: "",
        description: ""
      }
    }
  }
};

module.exports = strains;
