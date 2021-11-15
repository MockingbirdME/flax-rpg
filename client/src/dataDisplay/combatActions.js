import React, { useContext } from 'react';
import DataDisplay from './components';
import DataContext from "../contexts/data";

const CombatActions = () => {
  const context = useContext(DataContext);
  const {combatActions} = context;
  return (
    <DataDisplay
      data={combatActions}
      name="Combat Action"
      rulesLink="/rules/combat"
      sortableFields={[
        {name: "Action Type", sort: "type", minWidthRem: 8},
        {name: "Action Point Cost", sort: "actionPointCost", minWidthRem: 10},
        {name: "Stamina Cost", sort: "staminaCost", minWidthRem: 8}
      ]}
      filterableFields={[{name: "Action Type", sort: "type"}]}
    />
  );
};

export default CombatActions;
