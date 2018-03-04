Rails.application.routes.draw do

  get 'hyakunin/game'

  root 'hyakunin#index'


  get 'hyakunin/game_react'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
