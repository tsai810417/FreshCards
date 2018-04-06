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
    Deck.create!([{ deck_name: Faker::Book.title, author_id: user_id.sample, subject_id: sub_id.sample }])
  end
