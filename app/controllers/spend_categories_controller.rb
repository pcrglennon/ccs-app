class SpendCategoriesController < ApplicationController
  before_action :set_spend_category, only: [:show, :edit, :update, :destroy]

  # GET /spend_categories
  # GET /spend_categories.json
  def index
    @spend_categories = SpendCategory.all
  end

  # GET /spend_categories/1
  # GET /spend_categories/1.json
  def show
  end

  # GET /spend_categories/new
  def new
    @spend_category = SpendCategory.new
  end

  # GET /spend_categories/1/edit
  def edit
  end

  # POST /spend_categories
  # POST /spend_categories.json
  def create
    @spend_category = SpendCategory.new(spend_category_params)

    respond_to do |format|
      if @spend_category.save
        format.html { redirect_to @spend_category, notice: 'Spend category was successfully created.' }
        format.json { render :show, status: :created, location: @spend_category }
      else
        format.html { render :new }
        format.json { render json: @spend_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /spend_categories/1
  # PATCH/PUT /spend_categories/1.json
  def update
    respond_to do |format|
      if @spend_category.update(spend_category_params)
        format.html { redirect_to @spend_category, notice: 'Spend category was successfully updated.' }
        format.json { render :show, status: :ok, location: @spend_category }
      else
        format.html { render :edit }
        format.json { render json: @spend_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /spend_categories/1
  # DELETE /spend_categories/1.json
  def destroy
    @spend_category.destroy
    respond_to do |format|
      format.html { redirect_to spend_categories_url, notice: 'Spend category was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_spend_category
      @spend_category = SpendCategory.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def spend_category_params
      params.require(:spend_category).permit(:name)
    end
end
