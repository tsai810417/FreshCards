json.key_format! camelize: :lower

json.extract! @deck, :id, :title, :subject_id
json.subject @deck.subject.title

# json.questions do
#   @deck.questions.each do | question |
#     json.set! question.id do
#       json.extract! question, :body, :answer
#     end
#   end
# end

json.questions do
  json.array! @deck.questions, :body, :answer
end
