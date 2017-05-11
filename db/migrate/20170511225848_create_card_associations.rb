class CreateCardAssociations < ActiveRecord::Migration[5.1]
  def change
    create_table :card_associations do |t|
      t.string :name

      t.timestamps
    end
  end
end
