import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import deckErrorsReducer from './deck_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  deck: deckErrorsReducer
});

export default errorsReducer;
