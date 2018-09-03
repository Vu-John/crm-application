require 'net/http'
module Api::V1
  class CustomersController < ApplicationController
    before_action :set_customer, only: [:show, :update, :destroy]

    # GET /customers
    def index
      @customers = Customer.all.order(id: :asc, first_name: :asc, last_name: :asc)

      render json: @customers
    end

    # GET /customers/status/status_type
    def customerStatus
      @customers = Customer.where(status: params[:status_type])

      render json: @customers
    end

    # GET /customers/progress_type
    def customerProgress
      @customers = Customer.where(progress: params[:progress_type])

      render json: @customers
    end

    # GET /customers/stats
    def customerStats
      count = {
        notStarted:Customer.where(progress: "Not Started").count,
        inProgress:Customer.where(progress: "In Progress").count,
        closed:Customer.where(progress: "Closed").count,
        total:Customer.all.count
      }

      render json: count
    end

    # GET /customers/1
    def show
      render json: @customer
    end

    # POST /customers
    def create
      @customer = Customer.new(customer_params)
      if @customer.save
        render json: @customer, status: :created
      else
        render json: @customer.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /customers/1
    def update
      if @customer.update(customer_params)
        render json: @customer
      else
        render json: @customer.errors, status: :unprocessable_entity
      end
    end

    # DELETE /customers/1
    def destroy
      @customer.destroy
    end

    # Integrations
    def marketingPerformance
      result = Net::HTTP.get(URI.parse('https://cs490-ais1.herokuapp.com/getMarketingPerformance'))

      render json: result
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_customer
        @customer = Customer.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def customer_params
        params.require(:customer).permit(:first_name, :last_name, :address, :email, :phone, :dob, :progress, :status, :status_type, :progress_type)
      end
  end
end
