import React, {useState, useEffect} from "react";

const DataContext = React.createContext();

export default DataContext;

export const DataContextProvider = props => {
  const [combatActions, setCombatActions] = useState({});
  const [backgrounds, setBackgrounds] = useState({});
  const [skills, setSkills] = useState({});
  const [strains, setStrains] = useState({});
  const [traits, setTraits] = useState({});

  const loadData = async (type) => {
    const response = await fetch(`api/v1/data/${type.toLowerCase()}`);
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    console.log(body);
    return body[type];
  }

  const loadBackgrounds = async () => {
    const backgrounds = await loadData('Backgrounds');
    setBackgrounds(backgrounds);
  };

  const loadCombatActions = async () => {
    const skills = await loadData('CombatActions');
    setCombatActions(skills);
  };

  const loadSkills = async () => {
    const skills = await loadData('Skills');
    setSkills(skills);
  };

  const loadStrains = async () => {
    const strains = await loadData('Strains');
    setStrains(strains);
  };

  const loadTraits = async () => {
    const traits = await loadData('Traits');
    setTraits(traits);
  };

  useEffect(() => {
    loadBackgrounds();
    loadCombatActions();
    loadSkills();
    loadStrains();
    loadTraits();
  }, []);


  return <DataContext.Provider value={{
  backgrounds, combatActions, skills, strains, traits
  }}>{props.children}</DataContext.Provider>;
};
