Rails.application.routes.draw do
  root 'homepage#index'

  get '/playpress', to: 'blogpage#playpress', as: 'playpress'
  get '/circles', to: 'blogpage#circles', as: 'circles'
  get '/marksandspencer', to: 'blogpage#marksandspencer', as: 'marksandspencer'
  get '/advertising', to: 'blogpage#advertising', as: 'advertising'

  get '/workshops', to: 'blogpage#workshops', as: 'workshops'
  get '/design-sprints', to: 'blogpage#design_sprints', as: 'design_sprints'


end
