
export const selectDeckQuestions = (state, deck) => {
  return deck ? deck.question_ids.map( id => state.questions[id]) : [];
};

export const selectDeckQuestion = (state, id) => {
  return state.questions[id];
}
