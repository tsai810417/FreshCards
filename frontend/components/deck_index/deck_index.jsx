import React from 'react';
import { Link } from 'react-router-dom';

class DeckIndex extends React.Component {
  componentDidMount() {
    if (this.props.indexType === 'all') {
      this.props.fetchDecks();
    } else {
      this.props.fetchDecks(1)
    }
  }

  render() {

    const myDeck = this.props.decks.map(deck => {
      return (
        <tr key={deck.id} className='deck-index-row'>
          <td className='deck-title-td'>
            <Link to={ `/decks/${deck.id}` } className='deck-index-link'>
            {deck.title}</Link>
          </td>
          <td className='deck-index-td'>{ deck.subject }</td>
          { this.props.indexType === 'currentuser' ? (
            <td className = 'deck-index-mastery'>{`${deck.mastery}%`}
            </td>
          ) : '' }
          { this.props.indexType === 'currentuser' && deck.authorId === this.props.currentUser.id ? (
            <td className = 'deck-index-empty-td'>
              <Link to={ `/decks/${deck.id}/edit` }
                className='deck-edit-link'>Edit Info</Link>
            </td>
          ) : '' }
          { this.props.indexType === 'currentuser' && deck.authorId === this.props.currentUser.id ? (
            <td className = 'deck-index-empty-td'>
              <Link to={ `/decks/${deck.id}/questions/new` }
                className='deck-add-question-link'>Add Card</Link>
            </td>
          ) : '' }
          { this.props.indexType === 'currentuser' && deck.authorId === this.props.currentUser.id ? (
            <td className='deck-index-empty-td'>
              <button className='deck-delete-button' onClick={ () => this.props.deleteDeck(deck.id).then(() => this.props.history.push('/profile')) }>Delete</button>
            </td>
          ) : '' }
        </tr>
      );
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
