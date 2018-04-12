export const updateProgress = progress => (
  $.ajax({
    url: `/api/progresses/${progress.deckId}`,
    method: 'PATCH',
    data: { progress }
  })
);

export const fetchProgress = deckId => (
  $.ajax({
    url: `/api/progresses/${deckId}`,
    method: 'GET'
  })
)
