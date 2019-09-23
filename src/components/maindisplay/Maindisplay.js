import React from 'react';
import './Maindisplay.css';
import AudioPlayer from '../soundform/AudioPlayer';

const Maindisplay = props => {
  return (
    <div className='Maindisplay'>
      <WelcomeMessage
        selectedTab={props.selectedTab}
        soundCategory={props.soundCategory}
      />
      <div className='favorite-buttons'>
        {/* <button className='btn delete' onClick={props.deleteFavorite}>
          <h3>Slett favoritt kombinasjon</h3>
        </button> */}
        <button className='btn delete' onClick={props.getFavorites}>
          <h3>Hent favoritt kombinasjon</h3>
        </button>
        <button className='btn favorite' onClick={props.handleFavorite}>
          <h3>Lagre Kombinasjon</h3>
        </button>
      </div>
    </div>
  );
};

const WelcomeMessage = props => {
  return (
    <div>
      <h2>
        Velkommen! {props.selectedTab && `Kombinasjon: ${props.selectedTab}`}
      </h2>
      <p>Vennligst velg tre kategorier per medietype i vindu til høyre.</p>
      <AudioPlayer
        soundTrack={props.selectedTab}
        soundCategory={props.soundCategory}
      />
    </div>
  );
};

export default Maindisplay;
