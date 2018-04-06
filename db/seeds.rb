# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
User.create([{ username: 'Guest', password: '123456', email: 'guest_login@' }])

sub_id = Array(1..5)
user_id = Array(1..10)

10.times do
  User.create([{ username: Faker::Name.name, password: '123456', email: Faker::Internet.email }])
end

Subject.create([
  {title: 'History'},
  {title: 'Science'},
  {title: 'Math'},
  {title: 'Art'},
  {title: 'Language'}
])

10.times do
  Deck.create!([{ title: Faker::Educator.course, author_id: user_id.sample, subject_id: sub_id.sample }])
end

Question.create!([
  { body: 'I am Q1-1', answer: 'I am A1-1', deck_id: 1 },
  { body: 'I am Q1-2', answer: 'I am A1-2', deck_id: 1 },
  { body: 'I am Q1-3', answer: 'I am A1-3', deck_id: 1 },
  { body: 'I am Q1-4', answer: 'I am A1-4', deck_id: 1 },
  { body: 'I am Q2-1', answer: 'I am A2-1', deck_id: 2 },
  { body: 'I am Q2-2', answer: 'I am A2-2', deck_id: 2 },
  { body: 'I am Q2-3', answer: 'I am A2-3', deck_id: 2 },
  { body: 'I am Q2-4', answer: 'I am A2-4', deck_id: 2 },
  { body: 'I am Q3-1', answer: 'I am A3-1', deck_id: 3 },
  { body: 'I am Q3-2', answer: 'I am A3-2', deck_id: 3 },
  { body: 'I am Q3-3', answer: 'I am A3-3', deck_id: 3 },
  { body: 'I am Q3-4', answer: 'I am A3-4', deck_id: 3 }
])
