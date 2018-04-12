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
    this.props.submitForm(this.state).then(deck => this.props.history.push(`/decks/${Math.max(...Object.keys(store.getState().decks))}`));
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

              <select value={this.state.subject}
                onChange={this.update('subject')}
                className='deck-form-dropdown'>
                {this.props.formType === 'Create Deck' ? (
                  <option defaultValue="">--Choose Subject--</option>
                ) : ''}
                {this.state.subject === 'History' ? (
                  <option value='History' selected>History</option>
                ) : (
                  <option value='History'>History</option>
                )}
                {this.state.subject === 'Science' ? (
                  <option value='Science' selected>Science</option>
                ) : (
                  <option value='Science'>Science</option>
                )}
                {this.state.subject === 'Math' ? (
                  <option value='Math' selected>Math</option>
                ) : (
                  <option value='Math'>Math</option>
                )}
                {this.state.subject === 'Art' ? (
                  <option value='Art' selected>Art</option>
                ) : (
                  <option value='Art'>Art</option>
                )}
                {this.state.subject === 'Language' ? (
                  <option value='Language' selected>Language</option>
                ) : (
                  <option value='Language'>Language</option>
                )}
                {this.state.subject === 'Law' ? (
                  <option value='Law' selected>Law</option>
                ) : (
                  <option value='Law'>Law</option>
                )}
                {this.state.subject === 'Medical' ? (
                  <option value='Medical' selected>Medical</option>
                ) : (
                  <option value='Medical'>Medical</option>
                )}
                {this.state.subject === 'Business' ? (
                  <option value='Business' selected>Business</option>
                ) : (
                  <option value='Business'>Business</option>
                )}
                {this.state.subject === 'Economics' ? (
                  <option value='Economics' selected>Economics</option>
                ) : (
                  <option value='Economics'>Economics</option>
                )}
                {this.state.subject === 'Technology' ? (
                  <option value='Technology' selected>Technology</option>
                ) : (
                  <option value='Technology'>Technology</option>
                )}
                {this.state.subject === 'Humanities' ? (
                  <option value='Humanities' selected>Humanities</option>
                ) : (
                  <option value='Humanities'>Humanities</option>
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
