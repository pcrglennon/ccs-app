Rails.application.routes.draw do
  resources :spend_categories
  resources :reward_currencies
  resources :banks
  resources :networks
  resources :cards
end
