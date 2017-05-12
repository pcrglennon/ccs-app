class ChangeCardCardAssociationIdToNetworkId < ActiveRecord::Migration[5.1]
  def change
    rename_column :cards, :card_association_id, :network_id
  end
end
