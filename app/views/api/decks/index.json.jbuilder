json.key_format! camelize: :lower
if @decks.length > 0
  @decks.each do | deck |
    json.set! deck.id do
      json.extract! deck, :id, :title
      json.subject deck.subject.title
      json.mastery deck.progress(current_user.id) if logged_in?
      json.authorId deck.author.id
    end
  end
end
