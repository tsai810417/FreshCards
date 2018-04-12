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
        if (this.props.questions[qId]) {
          return (
            <tr key={ qId }>
              <td className='deck-show-td'>{ this.props.questions[qId].body }</td>
              <td className='deck-show-td'>{ this.props.questions[qId].answer }</td>
              { this.props.currentUser && this.props.currentUser.id === this.props.deck.authorId ? (
                <td className='deck-show-empty-td'>
                  <button
                    className='deck-delete-question-button'
                    onClick={() => this.props.deleteQuestion(qId)}>Delete</button>
                </td>
              ) : ''}
            </tr>
          );
        }
          // qId will not be avaliable when the button is clicked!
          // i want to refresh the same page after delete
      })
    }
    return (
      <div className='deck-show-container'>
        <div className='deck-show-buttons'>
        { this.props.currentUser && this.props.currentUser.id === this.props.deck.authorId ? (
          <Link to={ `/decks/${this.props.match.params.deckId}/questions/new` }
            className='deck-add-question-link'>Add Card</Link>
        ) : '' }
        { this.props.currentUser && this.props.currentUser.id === this.props.deck.authorId ? (
          <Link to={ `/decks/${this.props.match.params.deckId}/edit` }
            className='deck-edit-link'>Edit Deck Info</Link>
        ) : '' }
        { this.props.currentUser && this.props.currentUser.id === this.props.deck.authorId ? (
          <button className='deck-delete-deck-button' onClick={ () => this.props.deleteDeck(this.props.match.params.deckId).then(()=> this.props.history.push('/profile')) }>Delete Deck</button>
        ) : '' }
        { this.props.deck.questions && this.props.deck.questions.length !== 0 ? (
          <Link to={ `/decks/${ this.props.match.params.deckId }/study`} className='deck-study-link'>Study Deck</Link>
        ) : ''}
        </div>
        <h1 className='deck-show-title'>{ `${this.props.deck.title} Cards Preview` }</h1>
        <h3 className='deck-show-subject'>Subject: { this.props.deck.subject }</h3>
        <table className='deck-show-table'>
          <tbody>
            <tr>
              <th className='deck-show-header'>Questions</th>
              <th className='deck-show-header'>Answers</th>
            </tr>
            { questions }
          </tbody>
        </table>


        <button className='deck-to-index-button' onClick={ () => this.props.history.push('/decks') }>Back to Index</button>
      </div>
    );
  }
}

export default DeckShow;
