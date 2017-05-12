class SetNullFalseOnCardName < ActiveRecord::Migration[5.1]
  def change
    change_column_null :cards, :name, false
  end
end
