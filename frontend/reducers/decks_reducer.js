import merge from 'lodash/merge';
import {
  RECEIVE_DECK,
  RECEIVE_DECKS,
  REMOVE_DECK
} from '../actions/deck_actions';

const decksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = {};
  switch (action.type) {
    case RECEIVE_DECK:
      let deck = action.payload.deck;
      newState[deck.id] = deck
      return merge({}, oldState, newState);
    case RECEIVE_DECKS:
      return action.decks;
      break;
    case REMOVE_DECK:
      newState = merge({}, oldState);
      delete(newState[action.deck.id]);
      return newState;
      break;
    default:
      return oldState;
  }
};

export default decksReducer;
