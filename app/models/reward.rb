class Reward < ApplicationRecord
  belongs_to :card
  belongs_to :reward_currency
  belongs_to :spend_category

  validates :percentage, numericality: { greater_than_or_equal_to: 0.0, less_than_or_equal_to: 100.0 }
end
