Types::QueryType = GraphQL::ObjectType.define do
  name 'Query'

  field :cards do
    description 'Return all Cards'

    type types[Types::CardType]
    resolve ->(_obj, _args, _ctx) {
      Card.all
    }
  end

  field :rewards do
    description 'Return all Rewards'

    type types[Types::RewardType]
    resolve ->(_obj, _args, _ctx) {
      Reward.all
    }
  end

  field :rewardCurrencies do
    description 'Return all RewardCurrencies'

    type types[Types::RewardCurrencyType]
    resolve ->(_obj, _args, _ctx) {
      RewardCurrency.all
    }
  end

  field :spendCategories do
    description 'Return all SpendCategories'

    type types[Types::SpendCategoryType]
    resolve ->(_obj, _args, _ctx) {
      SpendCategory.all
    }
  end
end
