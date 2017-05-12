class SetNullFalseOnNetworkName < ActiveRecord::Migration[5.1]
  def change
    change_column_null :networks, :name, false
  end
end
