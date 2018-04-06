json.key_format! camelize: :lower

json.extract! deck, :id, :deck_name, :subject_id
json.subject deck.subject.title
