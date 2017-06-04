json.extract! card, :id, :name, :annual_fee_cents, :created_at, :updated_at
json.url card_url(card, format: :json)

json.rewards(card.rewards)
