Types::QueryType = GraphQL::ObjectType.define do
  name 'Query'

  field :banks do
    description 'Return all Banks'

    type types[Types::BankType]
    resolve ->(_obj, _args, _ctx) {
      Bank.all
    }
  end

  field :cards do
    description 'Return all Cards'

    type types[Types::CardType]
    resolve ->(_obj, _args, _ctx) {
      Card.all
    }
  end

  field :networks do
    description 'Return all Networks'

    type types[Types::NetworkType]
    resolve ->(_obj, _args, _ctx) {
      Network.all
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
