import React from 'react';
import { withRouter } from 'react-router-dom';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.question;
    this.state['deckId'] = this.props.match.params.deckId
  }

  componentDidMount() {
    this.props.clearFormErrors();
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state).then(() => this.props.history.push(`/decks/${this.props.match.params.deckId}`))
  }

  renderErrors() {
    return (
      <ul className='error-list'>
        { this.props.errors.map((error, idx) => (
          <li key={ `error${idx}` }>{ error }</li>
        ))}
      </ul>
    );
  }

  render() {
    return(
      <div className='question-form-container'>
        <form
          onSubmit={ this.handleSubmit }
          className='question-form-box'>
          <h3 className='question-form-title'>{ this.props.formType }</h3>
          <div className='question-form'>
            <label className='question-form-label'>Question
              <textarea type='text'
                value={ this.state.body }
                onChange={ this.update('body') }
                className='question-form-textbox' />
              <p>Max. 250 charaters</p>
            </label>

            <label className='question-form-label'>Answer
              <textarea type='text'
                value={ this.state.answer }
                onChange={ this.update('answer') }
                className='question-form-textbox' />
              <p>Max. 250 charaters</p>
            </label>

            { this.renderErrors() }

            <input className='question-form-submit'
              type='submit'
              value='Submit' />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(QuestionForm)
