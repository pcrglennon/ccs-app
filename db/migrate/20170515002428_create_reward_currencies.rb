class CreateRewardCurrencies < ActiveRecord::Migration[5.1]
  def change
    create_table :reward_currencies do |t|
      t.string :name, null: false
      t.decimal :value_cents, null: false

      t.timestamps
    end
  end
end
