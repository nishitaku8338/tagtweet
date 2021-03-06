Rails.application.routes.draw do
  root to: 'tweets#index'
  resources :tweets, only: [:index, :new, :create] do
    # searchアクションへのルーティングを設定
    collection do
      get 'search'
    end
  end
end
