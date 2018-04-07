import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import decksReducer from './decks_reducer';
import questionsReducer from './questions_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  decks: decksReducer,
  errors: errorsReducer,
  questions: questionsReducer
});

export default rootReducer;
