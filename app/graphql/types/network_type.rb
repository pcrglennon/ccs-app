Types::NetworkType = GraphQL::ObjectType.define do
  name 'Network'

  field :id, !types.ID
  field :name, !types.String
end
