Types::MutationType = GraphQL::ObjectType.define do
  name 'Mutation'

  field :createPortfolio do
    description 'Create a new Portfolio'
    type Types::PortfolioType
    argument :name, !types.String
    resolve -> (_obj, args, ctx) {
      ctx[:current_user].portfolios.create(name: args[:name])
    }
  end

  field :destroyPortfolio do
    description 'Destroy a Portfolio'
    type Types::PortfolioType
    argument :id, !types.ID
    resolve -> (_obj, args, _ctx) {
      Portfolio.find(args[:id]).destroy
    }
  end

  field :createCardsPortfolio do
    description 'Create a new CardsPortfolio'
    type Types::CardsPortfolioType
    argument :cardId, !types.ID, as: :card_id
    argument :portfolioId, !types.ID, as: :portfolio_id
    resolve -> (_obj, args, _ctx) {
      CardsPortfolio.create(card_id: args[:card_id], portfolio_id: args[:portfolio_id])
    }
  end

  field :destroyCardsPortfolio do
    description 'Destroy a CardsPortfolio'
    type Types::CardsPortfolioType
    argument :id, !types.ID
    resolve -> (_obj, args, _ctx) {
      CardsPortfolio.find(args[:id]).destroy
    }
  end
end
