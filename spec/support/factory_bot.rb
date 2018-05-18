require 'factory_bot'

FactoryBot.define do
  factory :user do
    first_name "Mackenson"
    last_name "Dorancy"
    sequence(:email) {|n| "user#{n}@example.com" }
    password 'password'
    password_confirmation 'password'
  end

end
