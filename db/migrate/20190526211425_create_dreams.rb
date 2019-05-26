class CreateDreams < ActiveRecord::Migration[5.1]
  def change
    create_table :dreams do |t|
      t.text :body, null: false
      t.boolean :is_private, null: false
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :dreams, :author_id
  end
end
