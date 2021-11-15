import React, {useContext, useState} from 'react';
import DataDisplayListItem from './dataDisplayListItem.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import RulesContext from "../../contexts/rules";

const DataDisplayListSection = props => {
  const [sortBy, setSortBy] = useState('displayName');
  const [sortAssending, setSortAssending] = useState(true);
  const [displayDocumentation, setDisplayDocumentation] = useState("");

  const context = useContext(RulesContext);
  const {rawDocs} = context;

  const sorter = (a, b) => {
    const {data} = props;
    let fieldA = data[a][sortBy].toString();
    if (Array.isArray(fieldA)) fieldA = fieldA.join(" ");
    let fieldB = data[b][sortBy].toString();
    if (Array.isArray(fieldB)) fieldB = fieldB.join(" ");
    let stringA = fieldA ? fieldA.toLowerCase() : "";
    let stringB = fieldB ? fieldB.toLowerCase() : "";
    if (!sortAssending) {
      const placeholderA = stringA;
      stringA = stringB;
      stringB = placeholderA;
    }
    if (stringA < stringB) {
      return -1;
    }
    if (stringA > stringB) {
      return 1;
    }
    return 0;
  };

  const updateSort = (field) => {
    if (field === sortBy) setSortAssending(!sortAssending);
    else {
      setSortBy(field);
      setSortAssending(true);
    }
  };

  const applyFilters = (list) => (
    list.filter(itemKey => {
      const item = props.data[itemKey];
      const {filterFields} = props;
      const filterName = props.filterName.toLowerCase();
      if (filterName &&
          !item.displayName.toLowerCase().includes(filterName)) {
        return false;
      }
      for (const field in filterFields) {
        if (!item[field] || !filterFields[field].length) continue;
        if (!item[field].some(elm => filterFields[field].includes(elm))) return false;
      }
      return true;
    })
  );

  const renderSelected = (item) => {
    const extension = `${props.documentationExtension}${item}`;
    if (displayDocumentation === extension) setDisplayDocumentation("");
    else setDisplayDocumentation(extension);
  };

  const renderedDisplay = () => {
    const className = props.fields.length > 2 ? "hidden" : "placeholderText";
    console.log(displayDocumentation);
    console.log(rawDocs[displayDocumentation]);
    if (displayDocumentation) return rawDocs[displayDocumentation];
    return `<p class="${className}">Please select an option from the left to display.</p>`;
  };


  const list = () => {
    const {data} = props;
    if (!data) return "No Data Loaded.";

    let listHtml = Object.keys(data);

    listHtml = applyFilters(listHtml);

    listHtml.sort((a, b) => sorter(a, b));
    listHtml = listHtml.map(dataKey => (
      <DataDisplayListItem
        key={dataKey}
        name={dataKey}
        data={data[dataKey]}
        fields={props.fields}
        expandInPlace={props.fields.length > 1}
        renderSelected={ev => renderSelected(ev)}
        renderedContent={props.contentRenderer ? props.contentRenderer(dataKey) : renderedDisplay()}
      />
    ));
    if (listHtml.length) return listHtml;
    return (<p>Oh no! It looks like there are no results that match your filter selections.</p>);
  };

  const fields = [{name: `Name`, sort: `displayName`}].
    concat(props.fields)
    .map(field => (
      <h5 key={field.name}>{field.name}{field.noSorting ? "" : <FontAwesomeIcon icon={faSort} className="sortIcon" onClick={() => updateSort(field.sort)}/>}</h5>
    ));

  const headerRow = (
    <div className="dataDisplay__list__table__row dataDisplay__list__header">
      {fields}
    </div>
  );

  const displayClass = `dataDisplay__list__container dataDisplay__list__container__${props.fields.length + 2}`;

  return (
    <div className={displayClass}>

      {headerRow}
      <div className="dataDisplay__list__content__container">
        <div>
          {list()}
        </div>
        <div dangerouslySetInnerHTML={{__html: renderedDisplay()}} />
      </div>
    </div>
  );
};

export default DataDisplayListSection;
