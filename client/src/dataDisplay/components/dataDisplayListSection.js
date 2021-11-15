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
    const fieldA = Array.isArray(data[a][sortBy]) ? data[a][sortBy].join(" ") : data[a][sortBy].toString();
    const fieldB = Array.isArray(data[b][sortBy]) ? data[b][sortBy].join(" ") : data[b][sortBy].toString();

    const stringA = fieldA ? fieldA.toLowerCase() : "";
    const stringB = fieldB ? fieldB.toLowerCase() : "";

    if (stringA < stringB) return sortAssending ? -1 : 1;
    if (stringA > stringB) return sortAssending ? 1 : -1;
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
    const className = props.fields && props.fields.length > 2 ? "hidden" : "placeholderText";
    if (displayDocumentation) return rawDocs[displayDocumentation];
    return `<p class="${className}">Please select an option from the left to display.</p>`;
  };


  const list = () => {
    const {data} = props;
    if (!data) return "No Data Loaded.";

    const keys = Object.keys(data);

    const filteredKeys = applyFilters(keys);

    filteredKeys.sort((a, b) => sorter(a, b));

    const listHtml = filteredKeys.map(dataKey => (
      <DataDisplayListItem
        key={dataKey}
        name={dataKey}
        data={data[dataKey]}
        fields={props.fields || []}
        expandInPlace={props.fields && props.fields.length > 1}
        renderSelected={ev => renderSelected(ev)}
        renderedContent={props.contentRenderer ? props.contentRenderer(dataKey) : renderedDisplay()}
      />
    ));
    if (listHtml.length) return listHtml;
    return (<p>Oh no! It looks like there are no results that match your filter selections.</p>);
  };

  const fields = props.fields
    ? props.fields.map(field => (
      <h5 key={field.name} style={{minWidth: `${field.minWidthRem}rem`}} >{field.name}{field.noSorting ? "" : <FontAwesomeIcon icon={faSort} className="sortIcon" onClick={() => updateSort(field.sort)}/>}</h5>
    )) : "";

  const headerRow = (
    <div className="dataDisplay__list__row">
      <h5 key="name" className="dataDisplay__list__row__name" >
        Name <FontAwesomeIcon icon={faSort} className="sortIcon" onClick={() => updateSort('displayName')}/>
      </h5>
      <div className="dataDisplay__list__row__fields">
        {fields}
      </div>
      <span className="dataDisplay__list__row__expand_toggle" />
    </div>
  );

  const displayClass = `dataDisplay__list__container ${!props.fields ? 'dataDisplay__list__container__side_by_side' : ''}`;

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
