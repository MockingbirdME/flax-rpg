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

  const display = props.fields.map(field => {
    const displayString = (
      Array.isArray(props.data[field.sort])
        ? <ul style={{padding: "0"}}>{props.data[field.sort].map(item => <li key={item}>{item}</li>)}</ul>
        : <p>{props.data[field.sort]}</p>
    );

    return (
      <div key={field.sort} style={{justifyContent: "space-around"}}>{displayString}</div>
    );
  });
  display.unshift(<div key="displayName">{props.data.displayName}</div>);

  return (
    <div>
      <li
        className="dataDisplay__list__table__row dataDisplay__list__item">
        {display}
        <div onClick={() => toggleExpanded()}><FontAwesomeIcon icon={plusMinus} /></div>
      </li>
      <div className={expandedClass}
      >
        <div className="expandedListContent" dangerouslySetInnerHTML={{__html: expandedContent}} />
      </div>
    </div>
  );
};


export default DataDisplayListItem;
