import React, { useContext } from 'react';
import DataDisplay from './components';
import DataContext from "../contexts/data";

const Backgrounds = () => {
  const context = useContext(DataContext);
  const {backgrounds} = context;
  console.log(backgrounds);
  return (
    <DataDisplay
      data={backgrounds}
      namePlural="Backgrounds"
      nameSingular="Background"
      rulesLink="/rules/background"
      sortableFields={[{name: "Stamina", sort: "stamina"}, {name: "Willpower", sort: "willpower"}, {name: "Luck", sort: "luck"}]}
      filterableFields={[{name: "Action Type", sort: "type"}]}
    />
  );
};

export default Backgrounds;
