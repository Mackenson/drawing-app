require "httparty"


class Weather < ApplicationRecord
  attr_reader :data

  def initialize
    @data = []
  end

  def celcius
    response = HTTParty.get('http://api.wunderground.com/api/34c7152940073e33/conditions/q/CA/San_Francisco.json', format: :plain)
    temp = JSON.parse response
    @new_hash = {
      weather_data: temp["current_observation"]["temp_f"]
    }
  end
end
