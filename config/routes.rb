Rails.application.routes.draw do
  root 'homepage#index'

  get '/playpress', to: 'blogpage#playpress', as: 'playpress'
  get '/circles', to: 'blogpage#circles', as: 'circles'
  get '/marksandspencer', to: 'blogpage#marksandspencer', as: 'marksandspencer'
  get '/advertising', to: 'blogpage#advertising', as: 'advertising'
  get '/google', to: 'blogpage#google', as: 'google'
  get '/spotify', to: 'blogpage#spotify', as: 'spotify'

  get '/workshops', to: 'blogpage#workshops', as: 'workshops'
  get '/design-sprints', to: 'blogpage#design_sprints', as: 'design_sprints'
  get '/front-end', to: 'blogpage#front_end', as: 'front_end'
  get '/me', to: 'blogpage#me', as: 'me'

  get '/secret/google', to: 'secretpage#google_project', as: 'google_secret'

end