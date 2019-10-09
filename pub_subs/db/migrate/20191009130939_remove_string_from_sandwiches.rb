class RemoveStringFromSandwiches < ActiveRecord::Migration[6.0]
  def change

    remove_column :sandwiches, :string, :string
  end
end
