import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Landing extends React.Component {

  render() {
    return (
      <div className='landing-container'>
        <div className='img-container'>
          <h1>The Coolest and Efficient Way to Study</h1>
          <h3>Interact with materials helps you learn faster and stay refreshed</h3>
          <div className='landing-links'>
            <Link to='/decks'>
              <h4>Browse All Decks</h4>
              <h5>Study decks created by other users</h5>
            </Link >
            <Link to='/decks/new'>
              <h4>Create Own Deck</h4>
              <h5>Create and study on anything</h5>
            </Link>
            <Link to='/profile'>
              <h4>Profile</h4>
              <h5>Study decks created by you</h5>
            </Link>
          </div>
        </div>
        <div className='landing-decks'>
          <h1>Popular Decks</h1>
          <Link to='/decks' className='link-to-all-decks'>Browse All Decks</Link>
          <div className='decks-links'>
            <Link to='/decks/42' className='ochem'>
              <h3>Chemistry 101A</h3>
            </Link>
            <Link to='/decks/43' className='geo'>
              <h3>Geometry 101A</h3>
            </Link>
            <Link to='/decks/44' className='biochem'>
              <h3>Biochemistry 312A</h3>
            </Link>
            <Link to='/decks/45' className='bio'>
              <h3>General Biology 102A</h3>
            </Link>
            <Link to='/decks/46' className='mar'>
              <h3>Marketing 105B</h3>
            </Link>
            <Link to='/decks/47' className='eco'>
              <h3>Macroeconomics 112A</h3>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;
