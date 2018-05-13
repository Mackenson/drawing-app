class ReviewsController < ApplicationController
  before_action :configure_permitted_parameters, if: :devise_controller?

  def new
    @paints = Paint.find(params[:paint_id])
    @reviews = Review.new
  end

  def create
    @paints = Paint.find(params[:paint_id])
    @reviews = Review.new(reviews_params)
    @reviews.user = current_user
    @reviews.paint = @paints
      if @reviews.save
        flash[:notice] = "Place added successfully"
        redirect_to "/paints"

      else
        flash[:notice] = @reviews.errors.full_messages.join(", ")
        render :new
      end
  end

  def show
    @reviews = Review.find(params[:id])
  end

  def edit
    @reviews = Review.find(params[:id])
  end

  def update
      @reviews = Review.find(params[:id])
    if @reviews.update_attributes(reviews_params)
      flash[:notice] = "Your form has been submited"
      redirect_to paint_path
    else
      flash[:alert] = "You made an errors filling the form"
      render :edit
    end
  end

  def destroy
    @reviews = Review.find(params[:id])
    @reviews.destroy
  end

  private

  def reviews_params
    params.require(:review).permit(:title, :body, :rating)
  end
end
