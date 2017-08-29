class CreateUsersPortfolios < ActiveRecord::Migration[5.1]
  def change
    create_table :users_portfolios do |t|
      t.references :user, foreign_key: true
      t.references :portfolio, foreign_key: true
    end
  end
end
