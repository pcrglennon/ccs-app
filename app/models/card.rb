class Card < ApplicationRecord
  belongs_to :bank, optional: true
  belongs_to :network

  has_many :rewards, dependent: :destroy

  accepts_nested_attributes_for :rewards, reject_if: :all_blank, allow_destroy: true

  monetize :annual_fee_cents, allow_nil: true

  validates_presence_of :name
end
