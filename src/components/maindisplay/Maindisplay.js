import React from 'react';
import './Maindisplay.css';
import { AudioPlayer } from '../soundform/Soundform';

const Maindisplay = props => {
  return (
    <div className='Maindisplay'>
      <WelcomeMessage combi={props.combi} />
      <div className='favorite-buttons'>
        <button className='btn delete'>
          <h3>Slett favoritt kombinasjon</h3>
        </button>
        <button className='btn favorite'>
          <h3>Lagre Kombinasjon</h3>
        </button>
      </div>
    </div>
  );
};

const WelcomeMessage = props => {
  return (
    <div>
      <h2>Velkommen! {props.combi && `Kombinasjon: ${props.combi}`}</h2>
      <p>Vennligst velg tre kategorier per medietype i vindu til høyre.</p>
      <AudioPlayer combination={props.number} category={props.category} />
    </div>
  );
};

export default Maindisplay;
