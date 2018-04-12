import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../frontend/util/route_util'
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import DeckIndexContainer from './deck_index/deck_index_container';
import CurrentUserDeckIndexContainer from './deck_index/currentuser_deck_index_container';
import CreateDeckFormContainer from './deck_form/create_deck_form_container';
import EditDeckFormContainer from './deck_form/edit_deck_form_container';
import DeckShowContainer from './deck_show/deck_show_container';
import CreateQuestionContainer from './question_form/create_question_form_container';
import DeckStudyContainer from './deck_study/deck_study_container';
import DecksSearchContainer from './deck_search/decks_search_container';
import LandingContainer from './landing/landing_container';

const App = () => (
  <div>
    <header>
      <a className='logo-a-tag' href='#/'><img className='logo-img' src='https://github.com/tsai810417/resources/blob/master/Logo.png?raw=true'></img></a>
      <Link to='/' className='site-title'>Welcome to FreshCards</Link>
      <DecksSearchContainer />
      <GreetingContainer />
    </header>
    <Switch>
      <Route exact path='/' component={ LandingContainer } />
      <AuthRoute path="/login" component={ LoginFormContainer } />
      <AuthRoute path="/signup" component={ SignupFormContainer } />
      <Route exact path="/decks" component={ DeckIndexContainer } />
      <ProtectedRoute path="/profile" component={ CurrentUserDeckIndexContainer } />
      <ProtectedRoute path="/decks/new" component={ CreateDeckFormContainer } />
      <ProtectedRoute path="/decks/:deckId/edit" component={ EditDeckFormContainer } />
      <Route exact path="/decks/:deckId" component={ DeckShowContainer } />
      <ProtectedRoute exact path="/decks/:deckId/questions/new" component= { CreateQuestionContainer } />
      <ProtectedRoute exact path="/decks/:deckId/study" component={ DeckStudyContainer } />
    </Switch>
  </div>
);

export default App;
