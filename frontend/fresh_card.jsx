import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

//for test purpose
import { signup, login, logout } from './actions/session_actions';
import { fetchDeck, fetchDecks, deleteDeck, createDeck, updateDeck } from './actions/deck_actions';
import { revealAnswer, nextQuestion } from './actions/progress_actions';
import { fetchSearch } from './actions/decks_search_actions';
//test end


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore()
  }
  const root = document.getElementById('root');
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
  window.revealAnswer = revealAnswer;
  window.nextQuestion = nextQuestion;
  window.fetchSearch = fetchSearch;
  //end for test purpose
  ReactDOM.render(<Root store={ store } />, root);
});
