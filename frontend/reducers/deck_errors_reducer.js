import {
  RECEIVE_DECK,
  RECEIVE_DECK_ERRORS
} from '../actions/deck_actions';

const deckErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DECK_ERRORS:
      return action.errors
      break;
    case RECEIVE_DECK:
      return []
      break;
    default:
      return state;
  }
};

export default deckErrorsReducer;
