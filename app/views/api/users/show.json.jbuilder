json.key_format! camelize: :lower
json.extract! @user, :id, :username
#
# json.decks do
#   @user.decks.each do | deck |
#     json.set! deck.id do
#       json.extract! deck, :id, :title, :subject_id
#     end
#   end
# end
