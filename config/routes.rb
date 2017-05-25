Rails.application.routes.draw do
  # [STEALTH] No New Friends (or Users), but allow registered Users to edit themselves
  # https://github.com/plataformatec/devise/wiki/How-To:-Allow-users-to-edit-their-password
  # (Solution 2)
  devise_for :users, skip: :registrations, controllers: {
    sessions: 'users/sessions'
  }
  as :user do
    get 'users/edit' => 'users/registrations#edit', :as => 'edit_user_registration'
    patch 'users' => 'users/registrations#update', :as => 'user_registration'
  end

  root to: 'cards_app#index'

  resources :spend_categories
  resources :reward_currencies
  resources :banks
  resources :networks
  resources :cards
end
