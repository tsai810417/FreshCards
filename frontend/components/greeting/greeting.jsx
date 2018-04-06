import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'


const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" className='session-link'>Log In</Link>
    <Link to="/signup" className='session-link'>Sign Up</Link>
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
    props.currentUser ? personalGreeting(props.currentUser, props.logout, props.history) : sessionLinks()
  )
};

export default withRouter(Greeting);
