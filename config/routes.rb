Rails.application.routes.draw do

  get 'home', to: "pages#home"

  get 'bebo', to: "pages#bebo"

  get 'pages/contact'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "pages#home"

end
