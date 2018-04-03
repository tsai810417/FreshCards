import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';

//for test purpose
import { signup, login } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  //begin for test purpose
  window.login = login;
  window.signup = signup;
  window.store = store;
  //end for test purpose
  ReactDOM.render(<h1>Welcome to FreshCard</h1>, root);
});
