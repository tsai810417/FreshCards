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
    debugger
    let questions = '';
    if (!this.props.deck) {
      return (
        <div>Loading</div>
      )
    }
    if (this.props.deck.questions) {
      questions = this.props.deck.questions.map( qId => {
        debugger
        return (
          <tr>
            <td>{ this.props.questions[qId].body }</td>
            <td>{ this.props.questions[qId].answer }</td>
            { this.props.currentUser.id === this.props.deck.authorId ? (
              <button onClick={() => this.props.deleteQuestion(qId).then(() => this.props.histroy.push('/decks'))}>Delete</button>
            ) : ''}
          </tr>
          // qId will not be avaliable when the button is clicked!
          // i want to refresh the same page after delete
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

        { this.props.currentUser.id === this.props.deck.authorId ? (
          <button onClick={ () => this.props.deleteDeck(this.props.deck.id).then(()=> this.props.history.push('/profile')) }>Delete Deck</button>
        ) : '' }
      </div>
    );
  }
}

export default DeckShow;
