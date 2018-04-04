import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: "", password: "", username: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handdleGuestLogin = this.handdleGuestLogin.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state).then(() => this.props.history.push('/'));
  }

  handdleGuestLogin(e) {
    e.preventDefault();
    this.setState = {email: "guest_login@", password: "123456"};
    this.props.submitForm(this.state).then(() => this.props.history.push('/'));
  }

  renderErrors() {

    return (
      <ul>
        { this.props.errors.map((error, idx) => (
          <li key={`error${idx}`}>{ error }</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form-container">
        <form onSubmit={ this.handleSubmit } className="session-form-box">
          { this.props.formType }
          { this.renderErrors() }
          <div className="session-form">
            { this.props.formType === 'Sign Up' ? (
              <label className='session-form-label'>Username
                <input type='text'
                  value={ this.state.username }
                  onChange={ this.update('username') }
                  className='session-form-input' />
              <br />
            </label>
            ) : '' }

            <label className='session-form-label'>Email
              <input type='text'
                value={ this.state.email }
                onChange={ this.update('email') }
                className='session-form-input' />
            </label>
            <br />
            <label className='session-form-label'>Password
              <input type='password'
                value={ this.state.password }
                onChange={ this.update('password') }
                className='session-form-input' />
            </label>
            <br />
            <input className='session-form-submit'
              type='submit'
              value={ this.props.formType } />
          </div>
        </form>
        { this.props.formType === 'Log In' ? (
          <button className='session-form-submit' onClick={ this.handdleGuestLogin }>Guest Login</button>
        ) : '' }
        { this.props.navlink }
      </div>
    );
  }
}

export default withRouter(SessionForm);
