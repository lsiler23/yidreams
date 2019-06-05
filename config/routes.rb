Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  resources :users, only: [:create, :show], defaults: { format: :json }
  resources :dreams, only: [:create, :update, :show, :index], defaults: { format: :json } do
    get 'export', on: :collection, defaults: { format: :csv }
  end
  resource :session, only: [:create, :destroy], defaults: { format: :json }
end
