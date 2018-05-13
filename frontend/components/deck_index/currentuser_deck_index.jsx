import React from 'react';
import { Link } from 'react-router-dom';

class CurrentUserDeckIndex extends React.Component {
  componentDidMount() {
    this.props.fetchDecks(1);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  handleEdit(e) {
    e.preventDefault();
    this.props.history.push(`/decks/${e.target.dataset.id}/edit`);
    e.stopPropagation();
  }

  handleAdd(e) {
    e.preventDefault();
    this.props.history.push(`/decks/${e.target.dataset.id}/questions/new`);
    e.stopPropagation();
  }

  handleDelete(e) {
    e.preventDefault();
    document.getElementById('modal-confirm').attributes[1].value = e.target.dataset.id
    document.getElementById('delete-modal').style.display = 'block';
    // this.props.deleteDeck(e.target.dataset.id);
    // this.props.fetchDecks(1);
    e.stopPropagation()
  }

  handleModalConfirm(e) {
    e.preventDefault();
    this.props.deleteDeck(e.target.dataset.id);
    document.getElementById('delete-modal').style.display = 'none';
    this.props.fetchDecks(1);
    e.stopPropagation();
  }

  handleModalCancel(e) {
    e.preventDefault();
    document.getElementById('modal-confirm').attributes[1].value = "";
    document.getElementById('delete-modal').style.display = 'none';
    e.stopPropagation();
  }

  render() {
    const myDecks = this.props.decks.filter(deck => deck.authorId === this.props.currentUser.id).map(deck => {
      return (
        <tr key={deck.id} className='currentuser-deck-index-row'  onClick={ () => this.props.history.push(`/decks/${deck.id}`) }>
          <td className = 'currentuser-deck-mastery-td'>{`${deck.mastery}%`}
          </td>
          <td className='currentuser-deck-title-td'>
            {deck.title}
          </td>
          <td className='currentuser-deck-subject-td'>{ deck.subject }</td>
          <td className = 'currentuser-deck-button-td'>
            <button onClick={this.handleEdit} data-id={deck.id}>Edit Info</button>
          </td>
          <td className = 'currentuser-deck-button-td'>
            <button onClick={this.handleAdd} data-id={deck.id}>Add Card</button>
          </td>
          <td className='currentuser-deck-button-td'>
            <button onClick={this.handleDelete} data-id={deck.id}>Delete</button>
          </td>
        </tr>
      );
    });

    const otherDecks = this.props.decks.filter(deck => deck.authorId !== this.props.currentUser.id).map(deck => {
      return (
        <tr key={deck.id} className='deck-index-row' onClick={ () => this.props.history.push(`/decks/${deck.id}`) }>
          <td className = 'currentuser-deck-mastery-td'>{`${deck.mastery}%`}
          </td>
          <td className='deck-title-td'>
            {deck.title}
          </td>
          <td className='deck-subject-td'>{ deck.subject }</td>
        </tr>
      )
    });

    return (
      <div className='currentuser-deck-index-container'>
        <div id="delete-modal">
          <div id="delete-modal-content">
            <p id="modal-message">Sure you want to delete entire deck?</p>
            <div id="modal-buttons">
              <button id="modal-cancel" onClick={this.handleModalCancel}>Cancel</button>
              <button id="modal-confirm" data-id="" onClick={this.handleModalConfirm}>Yes, delete</button>
            </div>
          </div>
        </div>
        <h1 className='deck-index-header'>Profile</h1>
        <table className='deck-index-table'>
          <tbody>
            { myDecks }
            { otherDecks }
          </tbody>
        </table>
        <div className='deck-index-buttons'>
          <Link to='/decks' className='deck-to-index-link'>To All Decks</Link>
          <Link to='/decks/new' className='link-to-create-deck'>New Deck</Link>
        </div>
      </div>
    );
  }
}

export default CurrentUserDeckIndex;
