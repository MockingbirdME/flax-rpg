import React, { useContext } from "react";
import DataDisplay from './components';
import DataContext from "../contexts/data";


const Traits = () => {
  const context = useContext(DataContext);
  const {traits} = context;

  return (
    <DataDisplay
      data={traits}
      name="Trait"
      rulesLink="/rules/traits"
      sortableFields={[{name: "Type", sort: "type"}]}
      filterableFields={[{name: "Type", sort: "type"}]}
    />
  );
};

export default Traits;
