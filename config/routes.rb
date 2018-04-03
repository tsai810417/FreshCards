Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resources :decks, only: [:index, :show, :create, :edit] do
      resources :questions, only: [:create]
      resources :answers, only: [:create]
    end
    resources :progresses, only: [:create, :show]
    resources :answers, only: [:create, :show]
    resources :questions, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end
