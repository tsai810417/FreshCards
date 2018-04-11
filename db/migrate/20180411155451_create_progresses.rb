class CreateProgresses < ActiveRecord::Migration[5.1]
  def change
    create_table :progresses do |t|
      t.integer :user_id, null: false
      t.integer :question_id, null: false
      t.integer :deck_id, null: false
      t.integer :score, null: false

      t.timestamps
    end
  end
end
