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

Deck.create!([{ title: 'Chemistry', author_id: admin.id, subject_id: sub_ids.sample }])
deck_ids.push(Deck.last.id)
Question.create!([
  { body: "Isotopes have same number of ____.", answer: "Protons", deck_id: deck_ids[-1] },
  { body: "Calculate the molecular weight of glucose.", answer: "180 g/mol", deck_id: deck_ids[-1] },
  { body: "Which of the following carry positive charge: neutrons, electrons or protons?", answer: "Protons", deck_id: deck_ids[-1] },
  { body: "Consider the reaction: CuO + Mg → Cu + MgO, which element is reduced?", answer: "Mg", deck_id: deck_ids[-1] },
  { body: "Ideal Gas Law", answer: "PV = nRT", deck_id: deck_ids[-1] },
  { body: "Atomic weight is sum of ____ and ____.", answer: "Neutrons and protons", deck_id: deck_ids[-1] }
])
Deck.create!([{ title: 'Biology', author_id: admin.id, subject_id: sub_ids.sample }])
deck_ids.push(Deck.last.id)
Question.create!([
  { body: "Define organic compound", answer: "Compounds at least have one carbon-hydrogen bond", deck_id: deck_ids[-1] },
  { body: "Snake is warm blooded or cold blooded animal?", answer: "Cold blooded", deck_id: deck_ids[-1] },
  { body: "Human normally have how many pairs of chromosomes", answer: "46", deck_id: deck_ids[-1] },
  { body: "What are the 3 types of RNA", answer: "tRNA, mRNA and rRNA", deck_id: deck_ids[-1] },
  { body: "What are the 3 alleles for human blood type", answer: "Ia, Ib and i", deck_id: deck_ids[-1] },
  { body: "Which structure can only be found in plant cells and not in animal cells", answer: "Cell wall", deck_id: deck_ids[-1] }
  ])

Deck.create!([{ title: 'Biochemistry', author_id: admin.id, subject_id: sub_ids.sample }])
deck_ids.push(Deck.last.id)
Question.create!([
  { body: "There are how many types of IgG?", answer: "4", deck_id: deck_ids[-1] },
  { body: "What is the approximately molecular weight of a heavy chain", answer: "50 kDa", deck_id: deck_ids[-1] },
  { body: "What is the approximately molecular weight of a light chain", answer: "25 kDa", deck_id: deck_ids[-1] },
  { body: "Define monosaccharides", answer: "The most basic carbohydrates that can not be further hydrolyzed.", deck_id: deck_ids[-1] },
  { body: "Sucrose is a monosaccharide or a disaccharide", answer: "Disaccharide", deck_id: deck_ids[-1] },
  { body: "What is the full name of ATP?", answer: "Adenosine triphosphate", deck_id: deck_ids[-1] }
  ])

Deck.create!([{ title: 'Geometry', author_id: admin.id, subject_id: sub_ids.sample }])
deck_ids.push(Deck.last.id)
Question.create!([
  { body: "Define radius", answer: "The segment from the center of a circle to any point on the circle", deck_id: deck_ids[-1] },
  { body: "How to calculate circumference using radius?", answer: "2π⋅r", deck_id: deck_ids[-1] },
  { body: "How many degrees is a right angle", answer: "90°", deck_id: deck_ids[-1] },
  { body: "What is the total interior angles of a pentagon?", answer: "540°", deck_id: deck_ids[-1] },
  { body: "Define isosceles triangle", answer: "a triangle that has 2 sides of same length", deck_id: deck_ids[-1] },
  { body: "How to calculate the volume of a cone", answer: "1/3π⋅r^2⋅h", deck_id: deck_ids[-1] }
  ])

Deck.create!([{ title: 'Macroeconomics', author_id: admin.id, subject_id: sub_ids.sample }])
deck_ids.push(Deck.last.id)
Question.create!([
  { body: "What is the full name of GDP", answer: "Gross Domestic Product", deck_id: deck_ids[-1] },
  { body: "Define inflation", answer: "Rise in the overall level of prices", deck_id: deck_ids[-1] },
  { body: "Define deflation", answer: "Fall in the overall level of prices", deck_id: deck_ids[-1] },
  { body: "Define Debt-GDP Ratio", answer: "Government debt as a percentage of GDP, frequently used as a measure of a government's ability to pay its debts", deck_id: deck_ids[-1] }
  ])

Deck.create!([{ title: 'Physics', author_id: guest_user.id, subject_id: sub_ids.sample }])
deck_ids.push(Deck.last.id)
Question.create!([
  { body: "F = m⋅a is from which law?", answer: "Newton's second law of motion", deck_id: deck_ids[-1] },
  { body: "Which of the following has higher thermol conductivity: water or metal?", answer: "Metal", deck_id: deck_ids[-1] },
  { body: "Describe frequency and period in an equation", answer: "f = 1/T", deck_id: deck_ids[-1] },
  { body: "F1 = -F2 is from which law?", answer: "Newton's third law of motion", deck_id: deck_ids[-1] },
  { body: "Higher pressure will _____ the boiling point", answer: "Increase", deck_id: deck_ids[-1] },
  { body: "Longitudinal wave cant travel in _____", answer: "Vacuum", deck_id: deck_ids[-1] }
  ])

# 6.times do
#   Deck.create!([{ title: Faker::Educator.course, author_id: admin.id, subject_id: sub_ids.sample }])
#   deck_ids.push(Deck.last.id)
# end

# deck_ids.each do |deck_id|
#   Question.create!([
#     { body: "I am Q#{deck_id}-1", answer: "I am A#{deck_id}-1", deck_id: deck_id },
#     { body: "I am Q#{deck_id}-2", answer: "I am A#{deck_id}-2", deck_id: deck_id },
#     { body: "I am Q#{deck_id}-3", answer: "I am A#{deck_id}-3", deck_id: deck_id },
#     { body: "I am Q#{deck_id}-4", answer: "I am A#{deck_id}-4", deck_id: deck_id },
#   ])
# end

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
