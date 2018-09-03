class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.references :customer, foreign_key: true
      t.text :item
      t.datetime :purchased_date
      t.text :description

      t.timestamps
    end
  end
end
