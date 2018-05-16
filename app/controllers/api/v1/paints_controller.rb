class Api::V1::PaintsController < ApplicationController
  before_action :configure_permitted_parameters, if: :devise_controller?
  def index
    render json: Paint.all
  end

  def show
    # binding.pry
    render json: { paint: Paint.find(params[:id]), user_id: current_user, reviews: Review.where(paint_id: params[:id]) }
  end

  def new
    @paints = Paint.new
  end

  def create
    @paints = Paint.new(paints_params)
    @paints.user = current_user
      if @paints.save
        flash[:notice] = "Paint added successfully"
        redirect_to "/paints"

      else
        flash[:notice] = @paints.errors.full_messages.join(", ")
        render :new
      end
  end


  def edit
    @paints = Paint.find(params[:id])
  end

  def update
      @paints = Paint.find(params[:id])
    if @paints.update_attributes(paints_params)
      flash[:notice] = "Your form has been submited"
      redirect_to paint_path
    else
      flash[:alert] = "You made an errors filling the form"
      render :edit
    end
  end

  def destroy
    @paints = Paint.find(params[:id])
    @paints.destroy
    redirect_to paint_path(@paints)
  end


  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:paint, :photo)
  end


  private

  def paints_params
    params.require(:paint).permit(:title, :description, :category, :photo)
  end
end
