Types::PortfolioType = GraphQL::ObjectType.define do
  name 'Portfolio'

  field :id, !types.ID
  field :name, !types.String
end
