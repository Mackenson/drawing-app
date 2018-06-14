class Api::V1::MeetupsController < ApplicationController
  before_action :configure_permitted_parameters, if: :devise_controller?

  def index
    meetup_parser = MeetupParser.new
    meetup_parser.search
    render json: { data: meetup_parser.data }
  end

end
