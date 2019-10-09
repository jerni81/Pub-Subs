class AddPhotoToSandwiches < ActiveRecord::Migration[6.0]
  def change
    add_column :sandwiches, :photo, :string
  end
end
