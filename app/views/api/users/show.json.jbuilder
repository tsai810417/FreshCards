json.key_format! camelize: :lower
json.extract! @user, :id, :username
# 
# json.decks do
#   @user.decks.each do | deck |
#     json.set! deck.id do
#       json.extract! deck, :id, :deck_name, :subject_id
#     end
#   end
# end
