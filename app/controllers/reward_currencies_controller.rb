class RewardCurrenciesController < ApplicationController
  before_action :set_reward_currency, only: [:show, :edit, :update, :destroy]

  # GET /reward_currencies
  # GET /reward_currencies.json
  def index
    @reward_currencies = RewardCurrency.all
  end

  # GET /reward_currencies/1
  # GET /reward_currencies/1.json
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
  # POST /reward_currencies.json
  def create
    @reward_currency = RewardCurrency.new(reward_currency_params)

    respond_to do |format|
      if @reward_currency.save
        format.html { redirect_to @reward_currency, notice: 'Reward currency was successfully created.' }
        format.json { render :show, status: :created, location: @reward_currency }
      else
        format.html { render :new }
        format.json { render json: @reward_currency.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /reward_currencies/1
  # PATCH/PUT /reward_currencies/1.json
  def update
    respond_to do |format|
      if @reward_currency.update(reward_currency_params)
        format.html { redirect_to @reward_currency, notice: 'Reward currency was successfully updated.' }
        format.json { render :show, status: :ok, location: @reward_currency }
      else
        format.html { render :edit }
        format.json { render json: @reward_currency.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /reward_currencies/1
  # DELETE /reward_currencies/1.json
  def destroy
    @reward_currency.destroy
    respond_to do |format|
      format.html { redirect_to reward_currencies_url, notice: 'Reward currency was successfully destroyed.' }
      format.json { head :no_content }
    end
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
