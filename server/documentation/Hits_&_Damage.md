## Damage Types and Effects
Damage Types inflict different effects and are resisted by different resources. Each damage type has a Resistant Resource and various effects at each of the 6 damage levels.

#### Resistant Resource
Each damage type is resisted by a resource type, usually Stamina. The character’s current and max values for that resource are compared to the total damage to determine the effect.

#### Damage Levels
0. Damage is zero or less
1. Damage is greater than zero
2. Damage is greater than the current value of the character’s resistant resource
3. Damage is greater than the max value of the character’s resistant resource
4. Damage is greater than the sum of the character’s current and max values of the resistant resource
5.  Damage is greater than double the sum of the character’s current and max values of the resistant resource
6. Damage is greater than triple the sum of the character’s current and max values of the resistant resource

#### Damage Types
(**Damage Type -** _Resistant Resource_)

**Concussive -** _Stamina_
  0. No effect
  1. Lose stamina equal to total damage
  2. Lose one max stamina
  3. Suffer a wound
  4. Suffer a severe wound
  5. Suffer a mortal wound
  6. Slain

**Penetrating -** _Stamina_
  0. Lose one stamina
  1. Lose one max stamina
  2. Suffer a wound
  3. Suffer a wound and lose two max stamina
  4. Suffer a severe wound and lose three max stamina
  5. Suffer a mortal wound and lose four max stamina
  6. Slain

## Suffering Damage
When a character suffers damage follow these steps to determine the effects:
1. Determine the type of damage being inflicted.
2. If damage type is penetrating and the total amount of damage is less than the character's *armor value* change the damage type to concussive.
3. Reduce the damage by the character's *resistance* for the specific type of damage, to a minimum of one.
4. If the character has the *weakness* trait for the damage type double the remaining damage.
5. Compare the damage total from step 4 to the damage's resistant resource to determine the damage level and apply the damage effects for that damage type at that damage level to the character.

## Wounds

#### Types of inflicted wounds
There are three types of wounds a character might suffer:
* Wound - the character takes one wound on their character sheet
* Severe wound - the character takes a number of wounds equal to half their max wounds (round up) to a minimum of two
* Mortal wound - the character takes a number of wounds equal to their max wounds

#### Effects of being wounded
Each time a character suffers a wound reduce their max defense, max stamina, and max willpower by one; additionally, characters suffer progressively sever conditions depending on how badly wounded they are:
* **Wounded, Lightly -** A character who has suffered at least one wound is light wounded.
* **Wounded, Severely -** A character who has suffered at least half their *max wounds* is severely wounded.
* **Wounded, Mortally -** A character has suffered a number of wounds equal to their *max wounds* is mortally wounded.
* **Dying -** A character who has suffered more wounds than their *max wounds* is dying.

## Conditions
* **Exhausted 1 -** The character suffers one penalty die to all skill checks unless they spend one stamina or willpower.
* **Exhausted 2 -** The character suffers two penalty dice to all skill checks unless they spend one stamina or willpower.
* **Exhausted 3 -** The character suffers two penalty dice to all skill checks unless they spend one max stamina or max willpower.
* **Fatigued 1 -** When the character spends one or more stamina, they must spend an additional one stamina or willpower.
* **Fatigued 2 -** When the character spends one or more stamina or willpower, they must spend an additional one stamina or willpower.
* **Fatigued 3 -** When the character spends one or more stamina, max stamina, willpower, or max willpower, they must spend an additional one max stamina or max willpower.
* **Wounded, Lightly -** The character can not recover the max stamina, max defense, or max willpower lost as a result of having suffered wounds.
* **Wounded, Severely -** The gains one penalty die to each of their skill checks.
* **Wounded, Mortally -** The gains an additional penalty die to each of their skill checks. Additionally, unless they are stabilized they must make a <SOME KIND OF SKILL CHECK where a failure means suffering an additional wound, a near success means losing max stamina, a success is the loss of one stamina, difficulty of the check should increase based on the character's actions that turn> each round.
* **Dying -** The character can not recover the max stamina or defense lost by having suffered wounds and gains two penalty dice to each of their skill checks, these penalty die cannot be reduced or ignored by spending willpower. Additionally, unless they are stabilized they must make a <SOME KIND OF SKILL CHECK where a failure means death, a near success is an extra wound, a success is the loss of one max stamina, difficulty of the check should increase based on the character's actions that turn> each round.


## Permanent Injuries

## Dying

## Recovering from Injuries

### Recovering from Wounds

### Recovering from Fatigue
