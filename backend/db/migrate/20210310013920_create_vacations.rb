class CreateVacations < ActiveRecord::Migration[6.0]
  def change
    create_table :vacations do |t|
      t.string :location_name
      t.string :main_image
      t.string :accommodataion_image
      t.string :climate
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
