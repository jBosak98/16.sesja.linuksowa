require 'sinatra/base'

class SesjaLinuksowa < Sinatra::Application

  configure do
    register Sinatra::Partial
    set :partial_template_engine, :haml
  end

  get '/' do
    haml :index, :format => :html5
  end

end
