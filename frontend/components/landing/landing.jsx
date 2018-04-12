import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Landing extends React.Component {

  render() {
    return (
      <div className='landing-container'>
        <div className='img-container'>
          <img src='https://github.com/tsai810417/resources/blob/master/landing_img.jpg?raw=true' />
          <p>This is a cool site</p>
        </div>
        <div className='landing-links'>
        </div>
        <div className='landing-decks'>
        </div>
      </div>
    )
  }
}

export default Landing;
