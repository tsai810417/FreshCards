import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER , LOGOUT_CURRENT_USER} from '../actions/session_actions';

const _nullUser = Object.freeze({ currentUser: null });

const sessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);
  let newState = {};
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = action.payload
      return merge({}, newState);
      break;
    case LOGOUT_CURRENT_USER:
      return _nullUser;
      break;
    default:
      return oldState;
  }
} ;

export default sessionReducer;
