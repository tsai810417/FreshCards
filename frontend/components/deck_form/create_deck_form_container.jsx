import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { createDeck } from '../../actions/deck_actions';
import DeckForm from './deck_form';

const mapStateToProps = ({ errors }) => ({
  deck: {title: '', subject_id: ''},
  errors: errors.deck,
  formType: 'Create Deck'
});

const mapDispatchToProps = dispatch => ({
  submitForm: deck => dispatch(createDeck(deck))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckForm);
