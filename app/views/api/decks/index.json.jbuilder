json.key_format! camelize: :lower
@decks.each do | deck |
  json.set! deck.id do
    json.extract! deck, :id, :deck_name
  end
end
