# == Schema Information
#
# Table name: decks
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  author_id  :integer          not null
#  subject_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Deck < ApplicationRecord
  validates :title, :author_id, :subject_id, presence: true

  belongs_to :author,
  foreign_key: :author_id,
  class_name: :User

  belongs_to :subject
  has_many :questions
end
