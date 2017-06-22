json.extract! card, :id, :name, :annual_fee_cents, :created_at, :updated_at
json.url card_url(card, format: :json)

json.rewards(card.rewards) do |reward|
  json.extract! reward, :id, :percentage, :card_id, :spend_category_id, :reward_currency_id
  json.reward_currency reward.reward_currency
end
