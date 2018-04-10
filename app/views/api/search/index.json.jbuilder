json.key_format! camelize: :lower
json.search(@decks) do | deck |
  json.id deck.id
  json.title deck.title
  json.subject deck.subject.title
end
