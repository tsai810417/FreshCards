import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

//for test purpose
import { signup, login, logout } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  //begin for test purpose
  window.login = login;
  window.signup = signup;
  window.store = store;
  window.logout = logout;
  //end for test purpose
  ReactDOM.render(<Root store={ store } />, root);
});
