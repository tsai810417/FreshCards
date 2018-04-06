class EditQuestionTable < ActiveRecord::Migration[5.1]
  def change
    add_column :questions, :body, :string, null: false
    add_column :questions, :answer, :string, null: false
  end
end
