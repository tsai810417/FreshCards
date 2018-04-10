import { RECEIVE_SEARCH } from '../actions/decks_search_actions';

const deckSearchReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  let newState = [];
  switch (action.type) {
    case RECEIVE_SEARCH:
      newState = action.payload.search;
      return newState;
      break;
    default:
      return oldState;
  }
};

export default deckSearchReducer;
