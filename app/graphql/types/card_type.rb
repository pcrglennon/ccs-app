Types::CardType = GraphQL::ObjectType.define do
  name 'Card'

  field :id, !types.ID
  field :name, !types.String
  field :annualFee, !types.String, property: :annual_fee
end
