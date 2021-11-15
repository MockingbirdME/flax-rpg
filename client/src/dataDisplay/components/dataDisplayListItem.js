import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const DataDisplayListItem = (props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    if (props.expandInPlace) setExpanded(!expanded);
    props.renderSelected(props.name);
  };

  const expandedClass = expanded ? "expandedListDisplay" : "hidden";
  const plusMinus = expanded ? (faMinus) : (faPlus);

  const fields = expanded
    ? ""
    : props.fields.map(field => {
      const displayString = (
        Array.isArray(props.data[field.sort])
          ? <ul style={{padding: "0", minWidth: `${field.minWidthRem}rem`}}>
            {props.data[field.sort].map(item => <li key={item}>{item}</li>)}
          </ul>
          : <p style={{minWidth: `${field.minWidthRem}rem`}} >{props.data[field.sort]}</p>
      );

      return <div key={field.sort} >{displayString}</div>;
    });


  const row = (
    <li className="dataDisplay__list__row dataDisplay__list__item">
      <div><p key="displayName" className="dataDisplay__list__row__name" ><b>{props.data.displayName}</b></p></div>
      <div className="dataDisplay__list__row__fields">
        {fields}
      </div>
      <div className="dataDisplay__list__row__expand_toggle" onClick={() => toggleExpanded()}><FontAwesomeIcon icon={plusMinus} /></div>
    </li>
  );

  return (
    <div>
      {row}
      <div className={expandedClass} >
        {props.renderedContent}
      </div>
    </div>
  );
};


export default DataDisplayListItem;
