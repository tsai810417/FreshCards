import * as APIUtil from '../util/deck_api_util';
export const RECEIVE_DECK = 'RECEIVE_DECK';
export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const REMOVE_DECK = 'REMOVE_DECK';
export const RECEIVE_DECK_ERRORS = 'RECEIVE_DECK_ERRORS';

export const receiveDecks = decks => ({
  type: RECEIVE_DECKS,
  decks
});

export const receiveDeck = deck => ({
  type: RECEIVE_DECK,
  deck
});

export const removeDeck = deck => ({
  type: REMOVE_DECK,
  deck
});

export const receiveErrors = errors => {
  debugger
  return ({
  type: RECEIVE_DECK_ERRORS,
  errors
})};

export const fetchDecks = () => dispatch => (
  APIUtil.fetchDecks().then(decks => dispatch(receiveDecks(decks)))
);

export const fetchCurrentUserDecks = (id) => dispatch => (
  APIUtil.fetchCurrentUserDecks(id).then(decks => dispatch(receiveDecks(decks)))
);

export const fetchDeck = id => dispatch => (
  APIUtil.fetchDeck(id).then(deck => dispatch(receiveDeck(deck)))
);

export const createDeck = deck => dispatch => (
  APIUtil.createDeck(deck).then(deck => (
    dispatch(receiveDeck(deck))
  ), err => {
    debugger
    return dispatch(receiveErrors(err.responseJSON))
  })
);

export const updateDeck = deck => dispatch => (
  APIUtil.updateDeck(deck).then(deck => (
    dispatch(receiveDeck(deck))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteDeck = deck => dispatch => (
  APIUtil.deleteDeck(deck).then(deck => dispatch(removeDeck(deck)))
);
