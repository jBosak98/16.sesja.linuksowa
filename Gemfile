# frozen_string_literal: true

source 'https://rubygems.org'

ruby '~> 2.6.0'

gem 'sinatra'
gem 'sinatra-partial', require: "sinatra/partial"
gem 'sinatra-r18n', require: "sinatra/r18n"
gem 'sinatra-asset-pipeline', '~> 1.0', require: ["sinatra/asset_pipeline", "sinatra/asset_pipeline/task"]
gem 'uglifier'
gem 'haml'
gem 'pony'
gem "rack", ">= 1.6.11"
gem "ffi", ">= 1.9.24"
gem "sprockets", ">= 3.7.2"
gem 'rack-protection', '~> 1.5.5'
gem 'rb-readline'

group :development do
  gem 'pry'
  gem 'pry-byebug'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'thin'

  gem 'rubocop'
  gem 'overcommit'
end

source 'https://rails-assets.org' do
  gem 'rails-assets-jquery'
  gem 'rails-assets-bootstrap'
end
