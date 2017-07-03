class NetworksController < ApplicationController
  before_action :set_network, only: [:show, :edit, :update, :destroy]

  # GET /networks
  def index
    @networks = Network.all
  end

  # GET /networks/1
  def show
  end

  # GET /networks/new
  def new
    @network = Network.new
  end

  # GET /networks/1/edit
  def edit
  end

  # POST /networks
  def create
    @network = Network.new(network_params)

    if @network.save
      redirect_to @network, notice: 'Network was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /networks/1
  def update
    if @network.update(network_params)
      redirect_to @network, notice: 'Network was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /networks/1
  def destroy
    @network.destroy
    redirect_to networks_url, notice: 'Network was successfully destroyed.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_network
      @network = Network.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def network_params
      params.require(:network).permit(:name)
    end
end
