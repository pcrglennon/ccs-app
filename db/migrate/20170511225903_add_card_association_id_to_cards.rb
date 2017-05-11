class AddCardAssociationIdToCards < ActiveRecord::Migration[5.1]
  def change
    add_reference :cards, :card_association, foreign_key: true
  end
end
