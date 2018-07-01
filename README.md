* Ruby version
  ruby '2.3.3'

* System dependencies
"dependencies": {
  "@rails/webpacker": "3.5",
  "babel-preset-react": "^6.24.1",
  "cors": "^2.8.4",
  "jsonp": "^0.2.1",
  "prop-types": "~15.6.0",
  "react": "^15.4.2",
  "react-dom": "^15.4.2",
  "react-dropzone": "^4.2.9",
  "react-router": "^3.2.0",
  "whatwg-fetch": "^2.0.4"

* Configuration

* Technology
  I used a Rails backend and React frontend, styled with Scss and Foundation.

  Other Resources:

  Photo uploading - Carrierwave and Amazon S3
  Weather - Weather API
  Meetup - Meetup API

* Database initialization
    This project uses a postgresql database.
    Before viewing the project on localhost, make sure you:
      1)Create a database (rake db:create)


* How to run the test suite
    Rspec tests can be run with 'rspec'

* Deployment instructions
    Install Ruby gems with 'bundle install'
    Install NPM packages with 'npm install' or 'yarn install'
    Start a rails server with 'rails s'
    Start a javascript server with 'npm start'
    Navigate to localhost/3000
