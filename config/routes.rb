Rails.application.routes.draw do
  root 'static_pages#home'
  get 'static_pages/home'
  # get 'static_pages/help'
  # sets :controller, :action and :id in params
  match 'static_pages/help', via: [:get, :post]
  get  'static_pages/about'
  get 'about'  => 'quotes#about'
  resources :quotes
end
