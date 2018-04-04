export const fetchDecks = () => (
  $.ajax({
    url: '/api/decks',
    method: 'GET'
  })
);

export const fetchDeck = id => (
  $.ajax({
    url: `/api/decks/${id}`,
    method: 'GET'
  })
);

export const createDeck = deck => (
  $.ajax({
    url: '/api/decks',
    method: 'POST',
    data: { deck }
  })
);

export const updateDeck = deck => (
  $.ajax({
    url: `/api/decks/${deck.id}`,
    method: 'PATCH',
    data: { deck }
  })
);

export const destroyDeck = deck => (
  $.ajax({
    url: `/api/decks/${deck.id}`,
    method: 'DELETE'
  })
);
