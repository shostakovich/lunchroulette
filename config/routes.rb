Lunchroulette::Application.routes.draw do
  resources :users do
    get 'confirm', :on => :member
  end

  get "home/index"

  root :to => "home#index"
end
