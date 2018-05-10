class UsersController < ApplicationController
  def index
  end

  def create
    @paint = Paint.new(paints_params)
      if @paint.save
        flash[:notice] = "Place added successfully"
        redirect_to "/"

      else
        flash[:notice] = @paint.errors.full_messages.join(", ")
        render :new
      end
  end

  def show
    @paint = Paint.find(params[:id])
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:paints, :avatar)
  end


  private

  def paints_params
    params.require(:paints).permit(:name, :street_address, :city, :zip, :description, :category, :avatar)
  end
end
