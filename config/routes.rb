Rails.application.routes.draw do
  root 'users#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
      namespace :v1 do
        resources :paints do
          resources :reviews
        end
      end
    end

    resources :paints, only: [:index, :new, :create, :update, :edit, :show, :destroy] do
      resources :reviews, only: [:index, :new, :create]
  end

  resources :videos, only: [:index]
  resources :about, only: [:index]
end
