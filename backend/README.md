# Gateview Backend

## Setup

- System requirements: The following can be installed with homebrew on MacOS
  - Ruby 2.6.5 - After Ruby is installed the following gems need to be installed.
    - [Rails 6](https://gorails.com/setup) "gem install rails -v 6.0.0"
    - [Bundler](https://bundler.io/) - Install with "gem install bundler"
    - [Foreman](https://github.com/ddollar/foreman) - Install with "gem install foreman"
  - Node 12+
  - Yarn
  - Redis
  - OpenSSL
  - PostgreSQL
- Run `bin/setup`

### Notes:

- If your ruby version is incorrect or if you are unable to execute a gem then run "gem environment" and put the RUBY EXECUTABLE & EXECUTABLE DIRECTORY values in your PATH.
- Local SSL config here only tested on macOS. For more info see https://rossta.net/blog/local-ssl-for-rails-5.html

## Run Application

- Run `foreman start -f Procfile.dev`
- Navigate to `gateview.dev:5000` in your browser

## Testing

- Run all linters and tests with `bin/test`
- Run Rails tests with `bin/rails test`
- Run React tests with `bin/yarn test`
- Run rubocop (ruby linter) with `rubocop`
- Run eslint/prettier (JavaScript linters) with `eslint app/javascript test/javascript`

## Deploy

- `git push heroku master`
