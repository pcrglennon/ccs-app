class SpendCategoriesController < ApplicationController
  before_action :set_spend_category, only: [:show, :edit, :update, :destroy]

  # GET /spend_categories
  def index
    @spend_categories = SpendCategory.all
  end

  # GET /spend_categories/1
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
  def create
    @spend_category = SpendCategory.new(spend_category_params)

    if @spend_category.save
      redirect_to @spend_category, notice: 'Spend category was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /spend_categories/1
  def update
    if @spend_category.update(spend_category_params)
      redirect_to @spend_category, notice: 'Spend category was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /spend_categories/1
  def destroy
    @spend_category.destroy
    redirect_to spend_categories_url, notice: 'Spend category was successfully destroyed.'
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
