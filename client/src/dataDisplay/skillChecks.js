import React, { useContext } from "react";
import DataDisplay from './components';
import DataContext from "../contexts/data";

const SkillChecks = () => {
  const context = useContext(DataContext);
  const {skillChecks} = context;

  return (
    <DataDisplay
      data={skillChecks}
      name="Skill Check"
      rulesLink="/rules/skill checks"
      sortableFields={[
        {name: "Primary Attribute", sort: "primaryAttribute", minWidthRem: 11},
        {name: "Primary Skill", sort: "primarySkill", minWidthRem: 11},
        {name: "Relevant Secondary Skills", sort: "relevantSecondarySkills", minWidthRem: 13}
      ]}
      filterableFields={[{name: "Primary Attribute", sort: "primaryAttribute"}, {name: "Primary Skill", sort: "primarySkill"}]}
      documentationExtension="rules/skill checks/"
    />
  );

};

export default SkillChecks;
