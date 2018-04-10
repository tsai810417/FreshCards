export const START_STUDY = 'START_STUDY';
export const NEXT_QUESTION = 'NEXT_QUESTION';
export const PREV_QUESTION = 'PREV_QUESTION';
export const REVEAL_ANSWER = 'REVEAL_ANSWER';

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
})
