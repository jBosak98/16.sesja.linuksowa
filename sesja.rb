require 'sinatra/base'

class SesjaLinuksowa < Sinatra::Application

  get '/' do
    haml :index, :format => :html5
  end

end
