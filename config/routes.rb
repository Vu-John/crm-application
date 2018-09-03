Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :customers
      get 'customers/status/:status_type', to: 'customers#customerStatus'
      get 'customers/progress/:progress_type', to: 'customers#customerProgress'
      get 'customers/progress/data/stats', to: 'customers#customerStats'
      resources :notes, :only => [:create]
      get 'notes/:customer_id', to: 'notes#customerNotes'
      resources :orders, :only => [:create]
      get 'customers/:customer_id/orders', to: 'orders#customerOrders'
      get 'marketing/performance', to: 'customers#marketingPerformance'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
