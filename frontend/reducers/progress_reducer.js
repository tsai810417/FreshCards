import merge from 'lodash/merge';
import {
  START_STUDY,
  NEXT_QUESTION,
  PREV_QUESTION,
  REVEAL_ANSWER,
  RECEIVE_MASTERY
} from '../actions/progress_actions';

const initialState = ({
  questionIdx: 0,
  reveal: false
});

const progressReducer = (oldState = initialState, action) => {
  Object.freeze(oldState);
  let newState = {};
  switch (action.type) {
    case START_STUDY:
      newState = initialState;
      return newState;
      break;
    case NEXT_QUESTION:
      newState['questionIdx'] = oldState['questionIdx'] + 1
      newState['reveal'] = false;
      return merge({}, oldState, newState);
      break;
    case PREV_QUESTION:
      newState['questionIdx'] = oldState['questionIdx'] - 1
      newState['reveal'] = false;
      return merge({}, oldState, newState)
      break;
    case REVEAL_ANSWER:
      newState['reveal'] = true;
      return merge({}, oldState, newState);
      break;
    case RECEIVE_MASTERY:
      newState = merge({}, oldState, action.mastery);
      return newState;
      break;
    default:
      return oldState;
  }
};

export default progressReducer;
