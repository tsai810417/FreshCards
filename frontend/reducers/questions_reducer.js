import merge from 'lodash/merge';

import { RECEIVEDECK } from '../actions/deck_actions';

const questionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let questions;
  switch (action.type) {
    case RECEIVEDECK:
      questions = action.payload.questions;
      return merge({}, state, questions);
      break;
    default:
      return state
  }
};

export default questionsReducer;
