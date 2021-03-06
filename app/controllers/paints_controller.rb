class PaintsController < ApplicationController
  before_action :configure_permitted_parameters, if: :devise_controller?

  def index
    @paints = Paint.all
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

  def show
    @paints = Paint.find(params[:id])
  end

  def edit
    @paints = Paint.find(params[:id])
  end

  def update
      @paints = Paint.find(params[:id])
    if @paints.update_attributes(paints_params)
      flash[:notice] = "Your form has been submited"
      redirect_to "/paints"
    else
      flash[:alert] = "You made an errors filling the form"
      render :edit
    end
  end

  def destroy
    @paints = Paint.find(params[:id])
    if !current_user.nil?
      if current_user.is_admin? || current_user == @paints.user
        @paints.destroy
        redirect_to "/paints"
      else
        flash[:alert] =  "Only the owner can delele this painting"
        redirect_to paint_path
      end
    end
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
