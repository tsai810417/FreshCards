import React from 'react';
import { Link } from 'react-router-dom';

class DeckShow extends React.Component {
  constructor(props) {

    super(props)
    this.deck = this.props.deck
  }
  componentDidMount() {
    debugger
    this.props.fetchDeck(this.props.match.params.deckId);
  }

  render() {
    if (!this.props.deck) {
      return (
        <div>Loading</div>
      )
    }
    const questions = this.props.deck.questions.map(question => {
      return (
        <tr>
          <th>question[body]</th>
          <th>question[answer]</th>
        </tr>
      );
    });

    return (
      <div>
        <h1>{ `${this.props.deck.deckName} Cards Preview` }</h1>
        <table>
          <tr>
            <th>Question</th>
            <th>Answer</th>
          </tr>
          { this.props.deck.questions ? questions : ''}
        </table>
        <Link to={`decks/${id}/questions/new`}>Add Questions</Link>
      </div>
    );
  }
}

export default DeckShow;
