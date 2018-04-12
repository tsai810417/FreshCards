import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Landing extends React.Component {

  render() {
    return (
      <div className='landing-container'>
        <div className='img-container'>
          <img src='/assets/landing_img.jpg' />
          <p>This is a cool site</p>
        </div>
      </div>
    )
  }
}

export default Landing;
