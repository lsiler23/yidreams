Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:create, :show]
  resources :dreams, only: [:create, :update, :show, :index]
  resource :session, only: [:create, :destroy]
end
