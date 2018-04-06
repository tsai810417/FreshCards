import React from 'react';
import { withRouter } from 'react-router-dom';

class DeckForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {deckName: '', subject_id: ''};
    this.deckName = this.state.deckName
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
          { this.props.formType !== 'Create Deck' ? (
            <h3>{ this.state.deckName }</h3>
          ) : (
            <h3>Create New Deck</h3>
          ) }
          <div className='deck-form'>
            <label className='deck-form-label'>Deck Name
              <input type='text'
                value={ this.state.deckName }
                onChange={ this.update('deckName') }
                className='deck-form-textbox' />
              <br />
            </label>
            <label className='deck-form-label'>Subject
              <select value={this.state.subjectID}
                onChange={this.update('subjectId')}
                className='deck-form-dropdown'>
                <option value='1'>Histore</option>
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
