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
    const deck = this.props.decks.map(deck => {
      return (
        <Link to={`/decks/${deck.id}` } className='deck-index-link'>
          <tr className='deck-index-row'>
            <td className='deck-title-td'>{deck.title}</td>

            <td className='deck-index-td'>{ deck.subject }</td>
            { this.props.indexType === 'currentuser' ? (
              <td className = 'deck-index-empty-td'>
                <Link to={ `/decks/${deck.id}/edit` }
                  className='deck-edit-link'>Edit Deck</Link>

              </td>
            ) : '' }
          </tr>
        </Link>
      );
    });

    return (
      <div className='deck-index-container'>
        <Link to='/decks/new' className='link-to-create-deck'>New Deck</Link>
        <table className='deck-index-table'>
          <tr className='deck-index-row-header'>
            <th className='deck-index-title-th'>Deck</th>
            <th className='deck-index-table-th'>Subject</th>
            {this.props.indexType === 'currentuser' ? (
              <th className='deck-index-edit-th'>       </th>
            ) : ''}
          </tr>
          { deck }
        </table>
      </div>
    );
  }
}

export default DeckIndex;
