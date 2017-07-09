Types::BankType = GraphQL::ObjectType.define do
  name 'Bank'

  field :id, !types.ID
  field :name, !types.String
end
