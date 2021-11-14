import React, {useState, useEffect} from "react";

const RulesContext = React.createContext();

export default RulesContext;

export const RulesContextProvider = props => {
  const [rawDocs, setRawDocs] = useState({});
  const [chapterList, setChapterList] = useState({});

  const parseChapters = documention => Object.keys(documention)
      .filter(key => key.split('/').length === 2)
      .map(key => key.split('/')[1].split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "));


  const loadDocumentation = async () => {
    const response = await fetch('/documentation');
    const body = await response.json();
    if (response.status !== 200) {
        throw Error(body.message)
    }
    setRawDocs(body.DOCUMENTATION);
    console.log(body.DOCUMENTATION);
    setChapterList(parseChapters(body.DOCUMENTATION));
  }

  useEffect(() => {
    loadDocumentation();
  }, []);


  return <RulesContext.Provider value={{
    rawDocs, chapterList
  }}>{props.children}</RulesContext.Provider>;
};
