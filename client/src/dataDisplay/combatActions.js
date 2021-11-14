import React, { useContext } from 'react';
import DataDisplay from './components';
import DataContext from "../contexts/data";

const CombatActions = () => {
  const context = useContext(DataContext);
  const {combatActions} = context;
  return (
    <DataDisplay
      data={combatActions}
      namePlural="Combat Action"
      nameSingular="Combat Actions"
      rulesLink="/rules/combat"
      sortableFields={[{name: "Action Type", sort: "type"}, {name: "Action Point Cost", sort: "actionPointCost"}, {name: "Stamina Cost", sort: "staminaCost"}]}
      filterableFields={[{name: "Action Type", sort: "type"}]}
    />
  );
};

export default CombatActions;
