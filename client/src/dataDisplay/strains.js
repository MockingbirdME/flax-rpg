import React, { useContext } from "react";
import DataDisplay from './components';
import DataContext from "../contexts/data";

const Strains = () => {
  const context = useContext(DataContext);
  const {strains} = context;

  return (
    <DataDisplay
      data={strains}
      name="Strain"
      rulesLink="/rules/strains"
      sortableFields={[]}
      documentationExtension="rules/strains/"
    />
  );
};

export default Strains;
