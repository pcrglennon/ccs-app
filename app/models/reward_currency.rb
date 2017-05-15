class RewardCurrency < ApplicationRecord
  validates_presence_of :name

  validates :value_cents, numericality: { greater_than_or_equal_to: 0.0 }
end
