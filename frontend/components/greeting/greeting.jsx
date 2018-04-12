import React from 'react';
import { withRouter } from 'react-router-dom';

const sessionLinks = (history) => (
  <nav className="login-signup">
    <button onClick={() => history.push('/login')}>Log In</button>
    <button onClick={() => history.push('/signup')}>Sign Up</button>
  </nav>
);

const personalGreeting = (currentUser, logout, history) => {
  let handleButton = (e) => {
    e.preventDefault();

    logout().then(history.push('/'))
  }
  return (
  <hgroup className="header-group">
    <a className='header-name' href='/#/profile'>Hi, { currentUser.username }</a>
    <button className="header-button" onClick={ handleButton }>Log Out</button>
  </hgroup>
)};

const Greeting = ( props ) => {
  return (
    props.currentUser ? personalGreeting(props.currentUser, props.logout, props.history) : sessionLinks(props.history)
  )
};

export default withRouter(Greeting);
