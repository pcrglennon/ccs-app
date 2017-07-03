class CardsController < ApplicationController
  before_action :set_card, only: [:show, :edit, :update, :destroy]

  # GET /cards
  def index
    @cards = Card.all
  end

  # GET /cards/1
  def show
  end

  # GET /cards/new
  def new
    @card = Card.new
    @card.rewards.build(percentage: 0.0)
  end

  # GET /cards/1/edit
  def edit
  end

  # POST /cards
  def create
    @card = Card.new(card_params)

    if @card.save
      redirect_to @card, notice: 'Card was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /cards/1
  def update
    if @card.update(card_params)
      redirect_to @card, notice: 'Card was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /cards/1
  def destroy
    @card.destroy
    redirect_to cards_url, notice: 'Card was successfully destroyed.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_card
      @card = Card.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def card_params
      params.require(:card).permit(:name,
        :annual_fee,
        :network_id,
        :bank_id,
        rewards_attributes: [:percentage, :spend_category_id, :reward_currency_id, :id, :_destroy]
      )
    end
end
