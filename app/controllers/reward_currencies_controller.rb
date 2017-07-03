class RewardCurrenciesController < ApplicationController
  before_action :set_reward_currency, only: [:show, :edit, :update, :destroy]

  # GET /reward_currencies
  def index
    @reward_currencies = RewardCurrency.all
  end

  # GET /reward_currencies/1
  def show
  end

  # GET /reward_currencies/new
  def new
    @reward_currency = RewardCurrency.new
  end

  # GET /reward_currencies/1/edit
  def edit
  end

  # POST /reward_currencies
  def create
    @reward_currency = RewardCurrency.new(reward_currency_params)

    if @reward_currency.save
      redirect_to @reward_currency, notice: 'Reward currency was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /reward_currencies/1
  def update
    if @reward_currency.update(reward_currency_params)
      redirect_to @reward_currency, notice: 'Reward currency was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /reward_currencies/1
  def destroy
    @reward_currency.destroy
    redirect_to reward_currencies_url, notice: 'Reward currency was successfully destroyed'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reward_currency
      @reward_currency = RewardCurrency.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def reward_currency_params
      params.require(:reward_currency).permit(:name, :value_cents)
    end
end
