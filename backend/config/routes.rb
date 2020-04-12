# frozen_string_literal: true

Rails.application.routes.draw do
  post "/spike/:app_id", to: "spike#passwordless_login"
  resources :users, only: [:index]
end
