class AddProgressStatusToCustomers < ActiveRecord::Migration[5.1]
  def change
    add_column :customers, :progress, :string
    add_column :customers, :status, :string
  end
end
