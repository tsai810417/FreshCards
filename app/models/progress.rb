# == Schema Information
#
# Table name: progresses
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  question_id :integer          not null
#  deck_id     :integer          not null
#  score       :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Progress < ApplicationRecord
  validates :user_id, :question_id, :deck_id, :score, presence: true

  belongs_to :user
  belongs_to :question
  belongs_to :deck 
end
