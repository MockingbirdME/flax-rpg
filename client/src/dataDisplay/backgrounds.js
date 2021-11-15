import React, { useContext } from 'react';
import DataDisplay from './components';
import DataContext from "../contexts/data";

const Backgrounds = () => {
  const context = useContext(DataContext);
  const {backgrounds} = context;
  console.log(backgrounds);

  const renderContent = (key) => {
    console.log(key);
    console.log(backgrounds[key]);
    const background = backgrounds[key];
    return (
      <div>
        <p><b>Focused Skills:</b> {background.focusedSkills.join(", ")}</p>
        <p><b>Related Skills:</b> {background.relatedSkills.join(", ")}</p>
        <p><b>Optional Traits:</b> {background.traitsOptional.join(", ")}</p>
        <p><b>Stamina:</b> {background.stamina} <b>Willpower:</b> {background.willpower} <b>Luck:</b> {background.luck}</p>
        <p><i>{background.description}</i></p>
      </div>
    );
  };

  return (
    <DataDisplay
      data={backgrounds}
      name="Background"
      rulesLink="/rules/background"
      sortableFields={[
        {name: "Focused Skills", sort: "focusedSkills", noSorting: true, minWidthRem: 13},
        {name: "Optional Traits", sort: "traitsOptional", noSorting: true, minWidthRem: 13, cutOrder: 2},
        {name: "Stamina", sort: "stamina", minWidthRem: 6},
        {name: "Willpower", sort: "willpower", minWidthRem: 6},
        {name: "Luck", sort: "luck", minWidthRem: 6}
      ]}
      filterableFields={[{name: "Focused Skills", sort: "focusedSkills"}]}
      contentRenderer={renderContent}
    />
  );
};

export default Backgrounds;
