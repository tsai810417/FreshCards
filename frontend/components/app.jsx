import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import DeckIndexContainer from './deck_index/deck_index_container';
import CurrentUserDeckIndexContainer from './deck_index/currentuser_deck_index_container';
import CreateDeckFormContainer from './deck_form/create_deck_form_container';

const App = () => (
  <div>
    <header>
      <a className='logo-a-tag' href='#/'><img className='logo-img' src='https://github.com/tsai810417/resources/blob/master/Logo.png?raw=true'></img></a>
      <h1 className='site-title'>Welcome to FreshCards</h1>
      <GreetingContainer />
    </header>
    <Switch>
      <Route path="/login" component={ LoginFormContainer } />
      <Route path="/signup" component={ SignupFormContainer } />
      <Route exact path="/decks" component={ DeckIndexContainer } />
      <Route path="/profile" component={ CurrentUserDeckIndexContainer } />
      <Route path="/decks/new" component={ CreateDeckFormContainer } />

    </Switch>
  </div>
);

export default App;
