class CardAssociationsController < ApplicationController
  before_action :set_card_association, only: [:show, :edit, :update, :destroy]

  # GET /card_associations
  # GET /card_associations.json
  def index
    @card_associations = CardAssociation.all
  end

  # GET /card_associations/1
  # GET /card_associations/1.json
  def show
  end

  # GET /card_associations/new
  def new
    @card_association = CardAssociation.new
  end

  # GET /card_associations/1/edit
  def edit
  end

  # POST /card_associations
  # POST /card_associations.json
  def create
    @card_association = CardAssociation.new(card_association_params)

    respond_to do |format|
      if @card_association.save
        format.html { redirect_to @card_association, notice: 'Card association was successfully created.' }
        format.json { render :show, status: :created, location: @card_association }
      else
        format.html { render :new }
        format.json { render json: @card_association.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /card_associations/1
  # PATCH/PUT /card_associations/1.json
  def update
    respond_to do |format|
      if @card_association.update(card_association_params)
        format.html { redirect_to @card_association, notice: 'Card association was successfully updated.' }
        format.json { render :show, status: :ok, location: @card_association }
      else
        format.html { render :edit }
        format.json { render json: @card_association.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /card_associations/1
  # DELETE /card_associations/1.json
  def destroy
    @card_association.destroy
    respond_to do |format|
      format.html { redirect_to card_associations_url, notice: 'Card association was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_card_association
      @card_association = CardAssociation.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def card_association_params
      params.require(:card_association).permit(:name)
    end
end
