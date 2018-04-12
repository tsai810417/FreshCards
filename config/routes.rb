Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resources :decks, only: [:index, :show, :create, :update, :destroy] do
      resources :questions, only: [:create]
    end
    resources :progresses, only: [:show, :update]
    resources :questions, only: [:update, :destroy]
    resource :session, only: [:create, :destroy, :show]
    resources :search, only: [:index]
  end

  root "static_pages#root"
end
