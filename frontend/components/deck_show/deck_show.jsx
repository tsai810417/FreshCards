import React from 'react';
import { Link } from 'react-router-dom';
import CreateQuestionContainer from '../question_form/create_question_form_container';

class DeckShow extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    this.props.fetchDeck(this.props.match.params.deckId);
  }

  handleDelete() {
    this.props.deleteDeck(this.props.match.params.deckId).then(() => this.props.history.push('/profile'))
  }

  render() {
    let questions = '';
    if (!this.props.deck) {
      return (
        <div>Loading</div>
      )
    }
    if (this.props.deck.questions) {
      questions = this.props.deck.questions.map( qId => {
        return (
          <tr>
            <td>{ this.props.questions[qId].body }</td>
            <td>{ this.props.questions[qId].answer }</td>
          </tr>
        );
      })
    }


    return (
      <div>
        <h1>{ `${this.props.deck.title} Cards Preview` }</h1>
        <h3>Subject: { this.props.deck.subject }</h3>
        <table>
          <tr>
            <th>Question</th>
            <th>Answer</th>
          </tr>
          { questions }
        </table>
        <CreateQuestionContainer />
        { this.props.currentUser ? (
          <button onClick={ this.handleDelete }>Delete Deck</button>
        ) : ''}
      </div>
    );
  }
}

export default DeckShow;
