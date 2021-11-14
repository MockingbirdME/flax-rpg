import React, { useContext } from "react";
import DataDisplay from './dataDisplay.js';
import DataContext from "../contexts/data";


const Traits = () => {
  const context = useContext(DataContext);
  const {traits} = context;

  return (
    <DataDisplay
      data={traits}
      namePlural="Traits"
      nameSingular="Trait"
      rulesLink="/rules/traits"
      sortableFields={[{name: "Type", sort: "type"}, {name: "Keywords", sort: "keywords"}, {name: "Requirements", sort: "requirementsDescription"}]}
      filterableFields={[{name: "Type", sort: "type"}, {name: "Keywords", sort: "keywords"}]}
    />
  );
};

export default Traits;
