class RenameCardAssociationToNetwork < ActiveRecord::Migration[5.1]
  def change
    rename_table :card_associations, :networks
  end
end
