import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import CharacterSheet from "./characterSheet/characterSheet.js";
import CreateOrEditChar from "./character/createOrEditChar.js";
import CombatActions from "./dataDisplay/combatActions.js";
import CoreRules from "./documentation/coreRules.js";
import Home from "./home/home.js";
import Backgrounds from "./dataDisplay/backgrounds.js"
import SkillChecks from "./dataDisplay/skillChecks.js";
import Strains from "./dataDisplay/strains.js";
import Traits from "./dataDisplay/traits.js";

import {CharacterContextProvider} from "./contexts/character";
import {DataContextProvider} from "./contexts/data";
import {RulesContextProvider} from "./contexts/rules";

class Routes extends Component {
  render() {
    return (
      <CharacterContextProvider>
        <DataContextProvider>
          <RulesContextProvider>

            <div id="route-controller">
              <Switch>
                <Route path="/rules" component={CoreRules} />
                <Route path="/backgrounds" component={Backgrounds} />
                <Route path="/skill checks" component={SkillChecks} />
                <Route path="/combat actions" component={CombatActions} />
                <Route path="/strains" component={Strains} />
                <Route path="/traits" component={Traits} />
                <Route path="/character/sheet/:charId?" component={CharacterSheet} />
                <Route path="/character/createoredit/:charId?"
                  component={CreateOrEditChar} />
                <Route exact path="/" component={Home} />
              </Switch>
            </div>

          </RulesContextProvider>
        </DataContextProvider>
      </CharacterContextProvider>
    );
  }
}

export default Routes;
