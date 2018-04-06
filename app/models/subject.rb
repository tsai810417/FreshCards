class Subject < ApplicationRecord
  validates :title, presence: true

  has_many :decks
end
