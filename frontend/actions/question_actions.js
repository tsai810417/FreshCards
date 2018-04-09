import * as APIUtil from '../util/question_api_util';
import { receiveDeck } from '../actions/deck_actions';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';
export const RECEIVE_QUESTION_ERRORS = 'RECEIVE_QUESTION_ERRORS';
export const CLEAR_FORM_ERRORS = 'CLEAR_FORM_ERRORS';


export const receiveQuestion = payload => ({
  type: RECEIVE_QUESTION,
  payload
});

export const removeQuestion = id => ({
  type: REMOVE_QUESTION,
  id
});

export const receiveErrors = errors => {
  return ({
    type: RECEIVE_QUESTION_ERRORS,
    errors
  })
};

export const clearFormErrors = () => ({
  type: CLEAR_FORM_ERRORS
});

export const createQuestion = question => dispatch => (
  APIUtil.createQuestion(question).then(question => (
    dispatch(receiveQuestion({question}))
  ), err => {
    return dispatch(receiveErrors(err.responseJSON))
  })
);

export const updateQuestion = question => dispatch => (
  APIUtil.updateQuestion(question).then(question => (
    dispatch(receiveQuestion({question: question}))
  ), err => {
    return dispatch(receiveErrors(err.responseJSON))
  })
);

export const deleteQuestion = id => dispatch => (
  APIUtil.deleteQuestion(id).then(payload => dispatch(receiveDeck(payload)))
);
