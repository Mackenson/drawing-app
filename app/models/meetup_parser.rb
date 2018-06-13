require "httparty"
class MeetupParser
  attr_reader :data

  def initialize
    @data = []
  end

  def search
    response = HTTParty.get("https://api.meetup.com/find/events?&topic_category=drawing&key=#{ENV["MEETUP_KEY"]}")
    meetup_data = response["results"][0]
    new_hash = {
      name: meetup_data["name"],
      link: meetup_data["link"],
      city: meetup_data["city"],
      state: meetup_data["state"],
      description: meetup_data["description"]
    }
    @data << new_hash
  end

end
