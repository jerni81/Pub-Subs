class AddReferencesToSandwiches < ActiveRecord::Migration[6.0]
  def change
    add_reference :sandwiches, :ingredients, foreign_key: true
  end
end
