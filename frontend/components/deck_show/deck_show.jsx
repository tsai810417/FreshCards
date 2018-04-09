import React from 'react';
import { Link } from 'react-router-dom';


class DeckShow extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.fetchDeck(this.props.match.params.deckId);
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
        { this.props.currentUser.id === this.props.deck.authorId ? (
          <Link to={ `/decks/${this.props.deck.id}/questions/new` }
            className='deck-add-question-link'>Add Card</Link>
        ) : '' }
      </div>
    );
  }
}

export default DeckShow;
