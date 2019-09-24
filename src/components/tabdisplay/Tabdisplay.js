import React from 'react';
import TabChoice from '../ui/Tabchoice';
import './Tabdisplay.css';

const Tabdisplay = props => {
  return <div className='tabdisplay'>{createTabChoices(props)}</div>;
};

const createTabChoices = props => {
  let choices = [];
  for (let i = 1; i <= 4; i++) {
    choices.push(<TabChoice tabNumber={i} onClick={props.onClick} value={i} selectedTab={props.selectedTab} />);
  }

  return choices;
};

export default Tabdisplay;
