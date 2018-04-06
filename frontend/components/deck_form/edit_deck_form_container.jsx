import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { updateDeck } from '../../actions/deck_actions';
import DeckForm from './deck_form';

const mapStateToProps = (state, ownProps) => {
  return ({
  deck: state.decks[ownProps.match.params.deckId] || {deck_name: '', subject_id: ''},
  errors: state.errors.deck,
  formType: 'Edit Deck'
})};

const mapDispatchToProps = dispatch => ({
  submitForm: deck => dispatch(updateDeck(deck))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckForm);
