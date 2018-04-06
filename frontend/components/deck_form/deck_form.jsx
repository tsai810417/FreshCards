import React from 'react';
import { withRouter } from 'react-router-dom';

class DeckForm extends React.Component {
  constructor(props) {
    super(props);
    debugger
    this.state = this.props.deck;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    if (e) {
      e.preventDefault();
    }
    this.props.submitForm(this.state).then(() => this.props.history.push('/decks'));
    //have to change to show page later
  }

  renderErrors() {
    return (
      <ul className='error-list'>
        { this.props.errors.map((error, idx) => (
          <li key={`error${idx}`}>{ error }</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className='deck-form-container'>
        <form
          onSubmit={ this.handleSubmit }
          className='deck-form-box'>
          <h3>{ this.props.formType }</h3>
          <div className='deck-form'>
            <label className='deck-form-label'>Deck Name
              <input type='text'
                value={ this.state.deck_name }
                onChange={ this.update('deck_name') }
                className='deck-form-textbox' />
              <br />
            </label>
            <label className='deck-form-label'>Subject
              <select value={this.state.subject_id}
                onChange={this.update('subject_id')}
                className='deck-form-dropdown'>
                <option value="" selected>--Choose Subject--</option>
                <option value='1'>History</option>
                <option value='2'>Science</option>
                <option value='3'>Math</option>
                <option value='4'>Art</option>
                <option value='5'>Language</option>
              </select>
            </label>
            { this.renderErrors() }

            <input className='deck-form-submit'
              type='submit'
              value={ this.props.formType } />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(DeckForm)
