import {
  RECEIVE_QUESTION,
  RECEIVE_QUESTION_ERRORS,
  CLEAR_FORM_ERRORS
} from '../actions/question_action';

const questionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUESTION_ERRORS:
      return action.errors;
      break;
    case RECEIVE_QUESTION:
      return [];
      break;
    case CLEAR_FORM_ERRORS:
      return [];
      break;
    default:
    return state;
  }
};

export default questionErrorsReducer;
