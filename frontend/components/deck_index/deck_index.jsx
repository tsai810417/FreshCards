import React from 'react';
import { Link } from 'react-router-dom';

class DeckIndex extends React.Component {
  componentDidMount() {
    this.props.fetchDecks();
  }

  render() {
    const decks = this.props.decks.map(deck => {
      return (
        <tr key={deck.id} className='deck-index-row' onClick={ () => this.props.history.push(`/decks/${deck.id}`) }>
          <td className='deck-title-td'>
            {deck.title}
          </td>
          <td className='deck-subject-td'>{ deck.subject }</td>
        </tr>
      )
    });

    return (
      <div className='deck-index-container'>
          <h1 className='deck-index-header'>All Decks</h1>
        <table className='deck-index-table'>
          <tbody>
            { decks }
          </tbody>
        </table>
        <div className='deck-index-buttons'>
          <Link to='/decks/new' className='link-to-create-deck'>New Deck</Link>
        </div>
      </div>
    );
  }
}

export default DeckIndex;
