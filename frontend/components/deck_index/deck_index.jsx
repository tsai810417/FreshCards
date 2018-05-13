import React from 'react';
import { Link } from 'react-router-dom';

class DeckIndex extends React.Component {
  componentDidMount() {
    this.props.fetchDecks();
  }

  render() {
    const decks = this.props.decks.map(deck => {
      return (
        <tr key={deck.id} className='deck-index-row'>
          <td className='deck-title-td'>
            <Link to={ `/decks/${deck.id}` } className='deck-index-link'>
            {deck.title}</Link>
          </td>
          <td className='deck-subject-td'>{ deck.subject }</td>
        </tr>
      )
    });

    return (
      <div className='deck-index-container'>
        { this.props.indexType === 'currentuser' ? (
          <h1 className='deck-index-header'>Profile</h1>
        ) : (
          <h1 className='deck-index-header'>Index</h1>
        )}
        <div className='deck-index-buttons'>
          <Link to='/decks/new' className='link-to-create-deck'>New Deck</Link>
          { this.props.indexType === 'currentuser' ? (
            <Link to='/decks' className='deck-to-index-link'>To All Decks</Link>
          ) : ''}
        </div>
        <table className='deck-index-table'>
          <tbody>
            { myDeck }
          </tbody>
        </table>
      </div>
    );
  }
}

export default DeckIndex;
