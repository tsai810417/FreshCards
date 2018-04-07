json.key_format! camelize: :lower
json.deck do
    json.extract! @deck, :id, :title, :subject_id
    json.subject @deck.subject.title

    json.questions @deck.question_ids
end
# json.questions do
#   @deck.questions.each do | question |
#     json.set! question.id do
#       json.extract! question, :body, :answer
#     end
#   end
# end

json.questions do
  @deck.questions.each do | question |
    json.set! question.id do
      json.extract! question, :id, :body, :answer
    end
  end
end
