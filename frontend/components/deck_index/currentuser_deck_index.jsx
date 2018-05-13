import React from 'react';
import { Link } from 'react-router-dom';

class CurrentUserDeckIndex extends React.Component {
  componentDidMount() {
    this.props.fetchDecks(1);
  }

  render() {
    const myDecks = this.props.decks.filter(deck => deck.authorId === this.props.currentUser.id).map(deck => {
      return (
        <tr key={deck.id} className='currentuser-deck-index-row'>
          <td className = 'currentuser-deck-mastery-td'>{`${deck.mastery}%`}
          </td>
          <td className='currentuser-deck-title-td'>
            <Link to={ `/decks/${deck.id}` } className='currentuser-deck-index-link'>
            {deck.title}</Link>
          </td>
          <td className='currentuser-deck-subject-td'>{ deck.subject }</td>
          <td className = 'currentuser-deck-button-td'>
            <Link to={ `/decks/${deck.id}/edit` }
              className='currentuser-deck-edit-link'>Edit Info</Link>
          </td>
          <td className = 'currentuser-deck-button-td'>
            <Link to={ `/decks/${deck.id}/questions/new` }
              className='currentuser-deck-add-question-link'>Add Card</Link>
          </td>
          <td className='currentuser-deck-button-td'>
            <button className='currentuser-deck-delete-button' onClick={ () => this.props.deleteDeck(deck.id).then(() => this.props.history.push('/profile')) }>Delete</button>
          </td>
        </tr>
      );
    });

    const otherDecks = this.props.decks.filter(deck => deck.authorId !== this.props.currentUser.id).map(deck => {
      return (
        <tr key={deck.id} className='deck-index-row'>
          <td className = 'currentuser-deck-mastery-td'>{`${deck.mastery}%`}
          </td>
          <td className='deck-title-td'>
            <Link to={ `/decks/${deck.id}` } className='deck-index-link'>
            {deck.title}</Link>
          </td>
          <td className='deck-subject-td'>{ deck.subject }</td>
        </tr>
      )
    });

    return (
      <div className='currentuser-deck-index-container'>
        <h1 className='deck-index-header'>Profile</h1>
        <table className='deck-index-table'>
          <tbody>
            { myDecks }
            { otherDecks }
          </tbody>
        </table>
        <div className='deck-index-buttons'>
          <Link to='/decks' className='deck-to-index-link'>To All Decks</Link>
        </div>
      </div>
    );
  }
}

export default CurrentUserDeckIndex;
