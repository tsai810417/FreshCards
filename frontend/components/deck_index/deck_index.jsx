import React from 'react';
import { Link } from 'react-router-dom';

class DeckIndex extends React.Component {
  componentDidMount() {
    this.props.fetchDecks();
  }

  render() {
    const deck = this.props.decks.map(deck => {
      return (
        <li key={deck.id}>
          <Link to={`/api/decks/${deck.id}`}>{deck.deckName}</Link>
          <p>{ deck.subject }</p>
        </li>
      );
    });

    return (
      <div>
        <ul>
          { deck }
        </ul>
        <Link to={ '/api/decks/new' }>Create Your Deck</Link>
      </div>
    );
  }
}

export default DeckIndex;
