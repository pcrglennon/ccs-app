class AddBankToCards < ActiveRecord::Migration[5.1]
  def change
    add_reference :cards, :bank, foreign_key: true
  end
end
