Types::SpendCategoryType = GraphQL::ObjectType.define do
  name 'SpendCategory'

  field :id, !types.ID
  field :name, !types.String
end
