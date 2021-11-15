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

  const expandedContent = props.renderedContent ? props.renderedContent : `<p>${props.data.description}</p>` || "";

  const row = (
    <li className="dataDisplay__list__row dataDisplay__list__item">
      <h5 key="displayName" className="dataDisplay__list__row__name" >{props.data.displayName} </h5>
      <div className="dataDisplay__list__row__fields">
        { // TODO add filter to remove cutable fields on short screens
          props.fields.map(field => {
            const displayString = (
              Array.isArray(props.data[field.sort])
                ? <ul style={{padding: "0", minWidth: `${field.minWidthRem}rem`}}>{props.data[field.sort].map(item => <li key={item}>{item}</li>)}</ul>
                : <p style={{minWidth: `${field.minWidthRem}rem`}} >{props.data[field.sort]}</p>
            );

            return (
              <div key={field.sort} >{displayString}</div>
            );
          })
        }
      </div>
      <div className="dataDisplay__list__row__expand_toggle" onClick={() => toggleExpanded()}><FontAwesomeIcon icon={plusMinus} /></div>
    </li>
  );
// Old:         <div className="expandedListContent" dangerouslySetInnerHTML={{__html: expandedContent}} />

  return (
    <div>
      {row}
      <div className={expandedClass}
      >
        {props.renderedContent}
      </div>
    </div>
  );
};


export default DataDisplayListItem;
