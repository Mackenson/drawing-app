require "httparty"
class MeetupParser
  attr_reader :data

  def initialize
    @data = []
  end

  def search
    response = HTTParty.get("https://api.meetup.com/find/events?&topic_category=drawing&key=#{ENV["MEETUP_KEY"]}")
    # binding.pry
    meetup_data = response.each do |meet|
    new_hash = {
      name: meet["name"],
      link: meet["link"],
      city: meet["city"],
      state: meet["state"],
      description: meet["description"]
    }
    @data << new_hash
  end
  end
end
