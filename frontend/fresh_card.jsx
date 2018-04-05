import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

//for test purpose
import { signup, login, logout } from './actions/session_actions';
import { fetchDeck, fetchDecks, deleteDeck, createDeck, updateDeck } from './actions/deck_actions';
//test end


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  //begin for test purpose
  window.login = login;
  window.signup = signup;
  window.store = store;
  window.logout = logout;
  window.fetchDeck = fetchDeck;
  window.fetchDecks = fetchDecks;
  window.deleteDeck = deleteDeck;
  window.createDeck = createDeck;
  window.updateDeck = updateDeck;
  //end for test purpose
  ReactDOM.render(<Root store={ store } />, root);
});
