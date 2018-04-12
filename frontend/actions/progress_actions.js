import * as APIUtil from '../util/progress_api_util';

export const START_STUDY = 'START_STUDY';
export const NEXT_QUESTION = 'NEXT_QUESTION';
export const PREV_QUESTION = 'PREV_QUESTION';
export const REVEAL_ANSWER = 'REVEAL_ANSWER';
export const RECEIVE_MASTERY = 'RECEIVE_MASTERY';

export const receiveMastery = mastery => ({
  type: RECEIVE_MASTERY,
  mastery
});

export const startStudy = () => ({
  type: START_STUDY
});

export const nextQuestion = () => ({
  type: NEXT_QUESTION
});

export const prevQuestion = () => ({
  type: PREV_QUESTION
});

export const revealAnswer = () => ({
  type: REVEAL_ANSWER
});

export const fetchProgress = deckId => dispatch => (
  APIUtil.fetchProgress(deckId).then(mastery => dispatch(receiveMastery(mastery))),
  dispatch(startStudy())
)

export const updateProgress = progress => dispatch => (
  APIUtil.updateProgress(progress).then(mastery => (
    dispatch(receiveMastery(mastery))
  ))
);
