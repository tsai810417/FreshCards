json.key_format! camelize: :lower

@decks.each do | deck |
  json.set! deck.id do
    json.extract! deck, :id, :title
    json.subject deck.subject.title
  end
end
