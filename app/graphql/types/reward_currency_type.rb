Types::RewardCurrencyType = GraphQL::ObjectType.define do
  name 'RewardCurrency'

  field :id, !types.ID
  field :name, !types.String
  field :valueCents, !types.Float, property: :value_cents
end
