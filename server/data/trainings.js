/* This template is just to make copy/pasting new trainings easier.
const template = {
  cost: 5,
  tags: [],
  prerequisitesDescription: "",
  checkPrerequisites: character => {
    console.log(character);
    return true;
  },
  description: "",
  apply: character => {
    console.log(character);
  }
};
*/

// Backgrounds are a set of more comprehensive trainings each with a lofty cost of 5???. These are not restricted to level 0 characters but are the only trainings available to such.
const backgrounds = {
  farmer: {
    cost: 5,
    tags: [],
    prerequisitesDescription: "",
    checkPrerequisites: character => {
      console.log(character);
      return true;
    },
    description: "",
    apply: character => {
      console.log(character);
    }
  }
};

const allTrainings = {...backgrounds};

export default allTrainings;
