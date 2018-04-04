import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'Sign Up',
  navlink: (
    <p className='session-p'>Already had an account? or try demo login? 
      <Link to='/login'>Log In</Link>
    </p>
  )
});

const mapDispatchToProps = dispatch => ({
  submitForm: user => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
