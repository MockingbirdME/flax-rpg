import React, { useContext } from "react";
import DataDisplay from './components';
import DataContext from "../contexts/data";

const SkillChecks = () => {
  const context = useContext(DataContext);
  const {skillChecks} = context;

  return (
    <DataDisplay
      data={skillChecks}
      namePlural="Skill Checks"
      nameSingular="Skill Check"
      rulesLink="/rules/skill checks"
      sortableFields={[{name: "Primary Attribute", sort: "primaryAttribute"}, {name: "Primary Skill", sort: "primarySkill"}, {name: "Relevant Secondary Skills", sort: "relevantSecondarySkills"}]}
      filterableFields={[{name: "Primary Attribute", sort: "primaryAttribute"}, {name: "Primary Skill", sort: "primarySkill"}]}
      documentationExtension="rules/skill checks/"
    />
  );

};

export default SkillChecks;
