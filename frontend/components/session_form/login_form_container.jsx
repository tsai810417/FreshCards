import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'Log In',
  navlink: (
    <p className='session-p'>Do not have an account?
      <Link to='/signup'>Sign Up</Link>
    </p>
  )
});

const mapDispatchToProps = dispatch => ({
  submitForm: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
