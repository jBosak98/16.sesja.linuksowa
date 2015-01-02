require 'sinatra/base'

class SesjaLinuksowa < Sinatra::Application

  configure do
    register Sinatra::Partial
    set :partial_template_engine, :haml
  end

  configure :development do
    use BetterErrors::Middleware
    BetterErrors.application_root = File.expand_path('..', __FILE__)
  end

  get '/' do
    haml :index, :format => :html5
  end

end
