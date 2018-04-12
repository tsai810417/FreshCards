# == Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  body       :string           not null
#  answer     :string           not null
#  deck_id    :integer          not null
#

class Question < ApplicationRecord
  validates :body, :answer, :deck_id, presence: true
  validates :body, :answer, length: { maximum: 250 }
  belongs_to :deck
  has_many :progresses
end
