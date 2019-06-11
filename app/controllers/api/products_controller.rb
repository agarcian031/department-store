class Api::ProductsController < ApplicationController
  before_action :set_department 
  before_action :set_product, only: [:update, :destroy]

  def index
    render json: @department.products.all
  end

  def create
    product = @department.products.new(product_params)
    if product.save 
      render json: product
    else 
      render json: product.errors, status: 422 
    end 
  end

  def update
    # product = @department.products.find(params[:id])
    # @department.product.update(product_params)
    # render json: @department
    if @product.update(product_params)
      render json: @product 
    else 
      render json: @product.errors, status: 422 
    end 
  end

  def destroy
  end

  private 
  def set_department
    @department = Department.find(params[:department_id])
  end 

  def set_product
    @product = Product.find(params[:id])
  end 

  def product_params
    params.require(:product).permit(:name, :description, :price)
  end 
end
