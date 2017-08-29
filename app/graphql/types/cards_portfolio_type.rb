Types::CardsPortfolioType = GraphQL::ObjectType.define do
  name 'CardsPortfolio'

  field :id, !types.ID

  field :cardId, !types.ID, property: :card_id
  field :portfolioId, !types.ID, property: :portfolio_id
end
