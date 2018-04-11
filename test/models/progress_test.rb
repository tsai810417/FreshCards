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

require 'test_helper'

class ProgressTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
