class CreateDecks < ActiveRecord::Migration[5.1]
  def change
    create_table :decks do |t|
      t.string :deck_name, null: false
      t.integer :author_id, null: false
      t.integer :subject_id, null: false

      t.timestamps
    end
  end
end
