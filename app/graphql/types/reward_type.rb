Types::RewardType = GraphQL::ObjectType.define do
  name 'Reward'

  field :id, !types.ID
  field :percentage, !types.Float

  field :cardId, !types.ID, property: :card_id
  field :rewardCurrencyId, !types.ID, property: :reward_currency_id
  field :spendCategoryId, !types.ID, property: :spend_category_id
end
