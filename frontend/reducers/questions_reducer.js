import merge from 'lodash/merge';
import {
  RECEIVE_DECK,
  RECEIVE_QUESTION,
  REMOVE_QUESTION
} from '../actions/deck_actions';

const questionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_DECK:
      if (action.payload.questions) {
        let questions = action.payload.questions;
        return questions;
      } else {
        return state;
      }
    case RECEIVE_QUESTION:
      let question = action.payload.question;
      newState[question.id] = question;
      return merge({}, state, newState);
      break;
    case REMOVE_QUESTION:
      newState = merge({}, state);
      delete(newState[action.payload.deck.id]);
      return newState;
      break;
    default:
      return state
  }
};

export default questionsReducer;
