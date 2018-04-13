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
  has_many :progresses

  def progress(user_id)
  #   # debugger
  #   #calculation
  #   #1. find only the progresses FOR THE CURRENT USER
    progresses = self.progresses.where(user_id: user_id)
  #   #2. Get all the scores ^
    progress_score = 0
    progresses.each do |progress|
      if self.questions.ids.include?(progress.question_id)
        progress_score += progress.score
      end
    end
  #
  #   #3. Calculate adding scores / num q * 5.
  return 0 if self.questions.length == 0
    return ((progress_score / (5.0 * self.questions.length)) * 100).floor
  end
end
