import React, { useContext } from "react";
import DataDisplay from './dataDisplay.js';
import DataContext from "../contexts/data";

const Strains = () => {
  const context = useContext(DataContext);
  const {strains} = context;

  return (
    <DataDisplay
      data={strains}
      namePlural="Strains"
      nameSingular="Strain"
      rulesLink="/rules/strains"
      sortableFields={[]}
      filterableFields={[]}
      hideFilter={true}
      documentationExtension="rules/strains/"
    />
  );
};

export default Strains;
