import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login } from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.login = login;
  window.signup = signup;
  ReactDOM.render(<h1>Welcome to FreshCard</h1>, root);
});
