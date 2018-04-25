Rails.application.routes.draw do

  devise_scope :user do
     get "/sign_in" => "devise/sessions#new" # custom path to login/sign_in
     get "/sign_up" => "devise/registrations#new", as: "new_user_registration" # custom path to sign_up/registration
   end

  devise_for :users

  get 'home', to: "pages#home"
  get 'contact', to: "pages#contact"
  root to: "pages#home"

end
