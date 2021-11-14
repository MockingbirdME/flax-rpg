import React, {} from 'react';
import ToolButton from './toolButton.js';

const RulesTools = props => (
  <div className="rulesToolsContainer">
    <ToolButton
      onHover={props.onHover}
      name="Backgrounds"
      link="/backgrounds"
    />
    <ToolButton
      onHover={props.onHover}
      name="Strains"
      link="/strains"
    />
    <ToolButton
      onHover={props.onHover}
      name="Traits"
      link="/traits"
    />
    <ToolButton
      onHover={props.onHover}
      name="Skill Checks"
      link="/skill checks"
    />
    <ToolButton
      onHover={props.onHover}
      name="Combat Actions"
      link="/combat actions"
    />
    <ToolButton
      onHover={props.onHover}
      name="Equipment"
      link=""
    />
    <ToolButton
      onHover={props.onHover}
      name="Arcane Powers"
      link=""
    />
  </div>
);

export default RulesTools;
