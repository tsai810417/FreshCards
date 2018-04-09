export const createQuestion = question => {
return (
  $.ajax({
    url: `/api/decks/${question.deckId}/questions`,
    method: 'POST',
    data: { question }
  })
)
};

export const updateQuestion = question => (
  $.ajax({
    url: `/api/questions/${question.id}`,
    method: 'PATCH',
    data: { question }
  })
);

export const deleteQuestion = question => (
  $.ajax({
    url: `/api/questions/${question.id}`,
    method: 'DELETE'
  })
);
