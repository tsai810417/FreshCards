json.key_format! camelize: :lower

json.extract! deck, :id, :deck_name
json.subject deck.subject.title
