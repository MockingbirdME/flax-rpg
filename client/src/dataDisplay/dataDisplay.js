import React, { useState } from 'react';
import {withRouter} from 'react-router-dom';
import './dataDisplay.css';
import DataDisplayTitleSection from './dataDisplayTitleSection.js';
import DataDisplayFilterSection from './dataDisplayFilterSection.js';
import DataDisplayListSection from './dataDisplayListSection.js';

const DataDisplay = (props) => {
  const [filterName, setFilterName] = useState("");
  const [filterFields, setFilterFields] = useState({});

  const updateFilters = (data) => {
    if (typeof data === "string") setFilterName(data);
    else setFilterFields(data);
  };

  const filterDisplay = props.hideFilter
    ? ""
    : <DataDisplayFilterSection
      nameSingular={props.nameSingular}
      namePlural={props.namePlural}
      filterableFields={props.filterableFields}
      data={props.data}
      updateFilters={ev => updateFilters(ev)}
    />;

  return (
    <div className="dataDisplay__container">
      <DataDisplayTitleSection
        name={props.namePlural}
        rulesLink={props.rulesLink}
      />
      {filterDisplay}
      <DataDisplayListSection
        data={props.data}
        fields={props.sortableFields}
        filterName={filterName}
        filterFields={filterFields}
        documentationExtension={props.documentationExtension}
      />
    </div>
  );

};

export default withRouter(DataDisplay);
