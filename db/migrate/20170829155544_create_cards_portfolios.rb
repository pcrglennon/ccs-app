class CreateCardsPortfolios < ActiveRecord::Migration[5.1]
  def change
    create_table :cards_portfolios do |t|
      t.references :card, foreign_key: true
      t.references :portfolio, foreign_key: true
    end
  end
end
