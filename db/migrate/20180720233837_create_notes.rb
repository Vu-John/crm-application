class CreateNotes < ActiveRecord::Migration[5.1]
  def change
    create_table :notes do |t|
      t.references :customer, foreign_key: true
      t.text :message

      t.timestamps
    end
  end
end
