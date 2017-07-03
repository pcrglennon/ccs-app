class BanksController < ApplicationController
  before_action :set_bank, only: [:show, :edit, :update, :destroy]

  # GET /banks
  def index
    @banks = Bank.all
  end

  # GET /banks/1
  def show
  end

  # GET /banks/new
  def new
    @bank = Bank.new
  end

  # GET /banks/1/edit
  def edit
  end

  # POST /banks
  def create
    @bank = Bank.new(bank_params)

    if @bank.save
      redirect_to @bank, notice: 'Bank was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /banks/1
  def update
    if @bank.update(bank_params)
      redirect_to @bank, notice: 'Bank was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /banks/1
  def destroy
    @bank.destroy
    redirect_to banks_url, notice: 'Bank was successfully destroyed.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bank
      @bank = Bank.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def bank_params
      params.require(:bank).permit(:name)
    end
end
