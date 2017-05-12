class SetNullFalseOnBankName < ActiveRecord::Migration[5.1]
  def change
    change_column_null :banks, :name, false
  end
end
