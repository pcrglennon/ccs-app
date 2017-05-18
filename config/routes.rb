Rails.application.routes.draw do
  root to: 'cards_app#index'

  resources :spend_categories
  resources :reward_currencies
  resources :banks
  resources :networks
  resources :cards
end
