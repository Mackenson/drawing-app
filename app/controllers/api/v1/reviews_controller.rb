class Api::V1::ReviewsController < ApplicationController
  before_action :configure_permitted_parameters, if: :devise_controller?
  skip_before_action :verify_authenticity_token

  def index
    render json: Review.where(paint_id: params[:id])
  end


def create
  @review = Review.new(title: review_params[:title], body: review_params[:body], rating: review_params[:rating], paint_id: review_params[:paint_id], user_id: current_user.id)
  if @review.save!
    flash[:notice] = "Place added successfully"
    render json: @review

  else
    flash[:notice] = @review.errors.full_messages.join(", ")
  end
end

private

def review_params
  params.require(:review).permit(:title, :body, :rating, :paint_id)
end
  end
