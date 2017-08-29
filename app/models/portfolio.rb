class Portfolio < ApplicationRecord
  validates_presence_of :name

  has_many :users_portfolios, dependent: :destroy
  has_many :users, through: :users_portfolios

  has_many :cards_portfolios, dependent: :destroy
  has_many :cards, through: :cards_portfolios
end
