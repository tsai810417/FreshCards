# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

User.destroy_all
Deck.destroy_all
Subject.destroy_all
Question.destroy_all
Progress.destroy_all

User.create([{ username: 'Guest', password: '123456', email: 'guest_login@' }])
User.create([{ username: 'Admin', password: '123456', email: 'admin@' }])

guest_user = User.find_by(username: 'Guest')
admin = User.find_by(username: 'Admin')


# sub_ids = Array(1..5)
# user_id = Array(1..10)

sub_ids = []
user_ids = [guest_user.id, admin.id]
deck_ids = []

5.times do
  User.create([{ username: Faker::Name.name, password: '123456', email: Faker::Internet.email }])
  user_ids.push(User.last.id)
end

subjects = [
  {title: 'History'},
  {title: 'Science'},
  {title: 'Math'},
  {title: 'Art'},
  {title: 'Language'},
  {title: 'Law'},
  {title: 'Medical'},
  {title: 'Business'},
  {title: 'Economics'},
  {title: 'Technology'},
  {title: 'Humanities'}
]

subjects.each do |subject|
  Subject.create(subject)
  sub_ids.push(Subject.last.id)
end
#
# Subject.create([
#   {title: 'History'},
#   {title: 'Science'},
#   {title: 'Math'},
#   {title: 'Art'},
#   {title: 'Language'},
#   {title: 'Law'},
#   {title: 'Medical'},
#   {title: 'Business'},
#   {title: 'Economics'},
#   {title: 'Technology'},
#   {title: 'Humanities'}
# ])

6.times do
  Deck.create!([{ title: Faker::Educator.course, author_id: admin.id, subject_id: sub_ids.sample }])
  deck_ids.push(Deck.last.id)
end

deck_ids.each do |deck_id|
  Question.create!([
    { body: "I am Q#{deck_id}-1", answer: "I am A#{deck_id}-1", deck_id: deck_id },
    { body: "I am Q#{deck_id}-2", answer: "I am A#{deck_id}-2", deck_id: deck_id },
    { body: "I am Q#{deck_id}-3", answer: "I am A#{deck_id}-3", deck_id: deck_id },
    { body: "I am Q#{deck_id}-4", answer: "I am A#{deck_id}-4", deck_id: deck_id },
  ])
end

# Question.create!([
#   { body: 'I am Q1-1', answer: 'I am A1-1', deck_id: 1 },
#   { body: 'I am Q1-2', answer: 'I am A1-2', deck_id: 1 },
#   { body: 'I am Q1-3', answer: 'I am A1-3', deck_id: 1 },
#   { body: 'I am Q1-4', answer: 'I am A1-4', deck_id: 1 },
#   { body: 'I am Q2-1', answer: 'I am A2-1', deck_id: 2 },
#   { body: 'I am Q2-2', answer: 'I am A2-2', deck_id: 2 },
#   { body: 'I am Q2-3', answer: 'I am A2-3', deck_id: 2 },
#   { body: 'I am Q2-4', answer: 'I am A2-4', deck_id: 2 },
#   { body: 'I am Q3-1', answer: 'I am A3-1', deck_id: 3 },
#   { body: 'I am Q3-2', answer: 'I am A3-2', deck_id: 3 },
#   { body: 'I am Q3-3', answer: 'I am A3-3', deck_id: 3 },
#   { body: 'I am Q3-4', answer: 'I am A3-4', deck_id: 3 }
# ])
# 
# deck1 = Deck.first
# deck1_question_ids = deck1.questions.pluck(:id)
#
# deck1_question_ids.each do |q_id|
#   Progress.create!(user_id: guest_user.id, question_id: q_id, deck_id: deck1.id, score: 1)
# end
