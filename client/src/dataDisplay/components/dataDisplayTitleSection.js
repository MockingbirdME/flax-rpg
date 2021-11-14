import React, {} from 'react';
import {Link} from 'react-router-dom';

const DataDisplayTitleSection = props => (
  <div className="dataDisplay__title__container">
    <h1 className="dataDisplay__title">{props.name}</h1>
    <Link to={props.rulesLink} className="dataDisplay__docLink">
      <h4>{props.name} Rules</h4>
    </Link>
  </div>
);

export default DataDisplayTitleSection;
