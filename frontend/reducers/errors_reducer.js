import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import deckErrorsReducer from './deck_errors_reducer';
import questionErrorsReducer from './question_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  deck: deckErrorsReducer,
  question: questionErrorsReducer
});

export default errorsReducer;
