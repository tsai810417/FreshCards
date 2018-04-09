import React from 'react';
import { withRouter } from 'react-router-dom';


class DeckForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.deck;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    this.props.clearFormErrors();
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    if (e) {
      e.preventDefault();
    }
    debugger
    this.props.submitForm(this.state).then(() => this.props.history.push(`/decks/${this.props.match.params.deckId}`));
    //have to direct to show page later, for the new deck? how to get //the deckId???
  }

  handleDelete() {
    this.props.deleteDeck(this.props.match.params.deckId).then(() => this.props.history.push('/profile'))
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
          <h3 className='deck-form-title'>{ this.props.formType }</h3>
          <div className='deck-form'>
            <label className='deck-form-label'>Deck Name
              <input type='text'
                value={ this.state.title }
                onChange={ this.update('title') }
                className='deck-form-textbox' />
              <br />
            </label>
            <label className='deck-form-label'>Subject

              <select value={this.state.subjectId}
                onChange={this.update('subjectId')}
                className='deck-form-dropdown'>
                {this.props.formType === 'Create Deck' ? (
                  <option defaultValue="">--Choose Subject--</option>
                ) : ''}
                {this.state.subject === 'History' ? (
                  <option value='1' selected>History</option>
                ) : (
                  <option value='1'>History</option>
                )}
                {this.state.subject === 'Science' ? (
                  <option value='2' selected>Science</option>
                ) : (
                  <option value='2'>Science</option>
                )}
                {this.state.subject === 'Math' ? (
                  <option value='3' selected>Math</option>
                ) : (
                  <option value='3'>Math</option>
                )}
                {this.state.subject === 'Art' ? (
                  <option value='4' selected>Art</option>
                ) : (
                  <option value='4'>Art</option>
                )}
                {this.state.subject === 'Language' ? (
                  <option value='5' selected>Language</option>
                ) : (
                  <option value='5'>Language</option>
                )}
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
