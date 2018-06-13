class Api::V1::MeetupsController < ApplicationController
  before_action :configure_permitted_parameters, if: :devise_controller?

  def index
    topic = params[:topic_query]
    meetup_parser = MeetupParser.new

    render json: { data: meetup_parser.data }
  end

end
