import React, { useState } from 'react';
import {withRouter} from 'react-router-dom';
import './dataDisplay.css';
import DataDisplayTitleSection from './dataDisplayTitleSection.js';
import DataDisplayFilterSection from './dataDisplayFilterSection.js';
import DataDisplayListSection from './dataDisplayListSection.js';

const DataDisplay = (props) => {
  const [filterName, setFilterName] = useState("");
  const [filterFields, setFilterFields] = useState({});

  const titleDisplay = (
    <DataDisplayTitleSection
      name={props.namePlural || `${props.name}s`}
      rulesLink={props.rulesLink}
    />
  );

  const updateFilters = (data) => {
    if (typeof data === "string") setFilterName(data);
    else setFilterFields(data);
  };

  const filterDisplay = props.filterableFields
    ? <DataDisplayFilterSection
      name={props.name}
      filterableFields={props.filterableFields}
      data={props.data}
      updateFilters={ev => updateFilters(ev)}
    />
    : "";

  const listDisplay = (
    <DataDisplayListSection
      data={props.data}
      fields={props.sortableFields}
      filterName={filterName}
      filterFields={filterFields}
      documentationExtension={props.documentationExtension}
      contentRenderer={props.contentRenderer}
    />
  );

  return (
    <div className="dataDisplay__container">
      {titleDisplay}
      {filterDisplay}
      {listDisplay}
    </div>
  );

};

export default withRouter(DataDisplay);
