class Card < ApplicationRecord
  belongs_to :bank, optional: true
  belongs_to :network

  monetize :annual_fee_cents, allow_nil: true

  validates_presence_of :name
end
