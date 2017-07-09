Types::CardType = GraphQL::ObjectType.define do
  name 'Card'

  field :id, !types.ID
  field :name, !types.String
  field :annualFee, !types.String, property: :annual_fee

  field :bankId, types.ID, property: :bank_id
  field :networkId, !types.ID, property: :network_id
end
