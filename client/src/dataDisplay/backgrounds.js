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
      sortableFields={[
        {name: "Focused Skills", sort: "focusedSkills", noSorting: true},
        {name: "Related Skills", sort: "relatedSkills", noSorting: true},
        {name: "Optional Traits", sort: "traitsOptional", noSorting: true},
        {name: "Stamina", sort: "stamina"},
        {name: "Willpower", sort: "willpower"},
        {name: "Luck", sort: "luck"}
      ]}
      filterableFields={[{name: "Focused Skills", sort: "focusedSkills"}]}
    />
  );
};

export default Backgrounds;
