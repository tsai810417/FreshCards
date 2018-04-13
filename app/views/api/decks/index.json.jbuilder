json.key_format! camelize: :lower

@decks.each do | deck |
  json.set! deck.id do
    json.extract! deck, :id, :title
    json.subject deck.subject.title
    json.mastery deck.progress(current_user.id)
    json.authorId deck.author.id
  end
end
