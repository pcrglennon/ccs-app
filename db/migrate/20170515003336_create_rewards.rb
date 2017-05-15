class CreateRewards < ActiveRecord::Migration[5.1]
  def change
    create_table :rewards do |t|
      t.references :card, foreign_key: true
      t.references :spend_category, foreign_key: true
      t.references :reward_currency, foreign_key: true
      t.decimal :percentage, null: false

      t.timestamps
    end
  end
end
