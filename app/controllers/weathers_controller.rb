class WeathersController < ApplicationController
  def search
    weather_parser = Weather.new
    weather_parser.celcius

    render json: { data: meetup_parser.data }
  end

end
