require 'sinatra/base'
require 'sinatra/assetpack'

class SesjaLinuksowa < Sinatra::Application

  configure do
    R18n::I18n.default = 'pl'
    register Sinatra::AssetPack
    register Sinatra::Partial
    set :partial_template_engine, :haml
  end

  configure :development do
    use BetterErrors::Middleware
    BetterErrors.application_root = File.expand_path('..', __FILE__)
  end

  assets do

    serve '/css', :from => "assets/css"

    serve '/js', :from => "assets/js"

    js_compression :yui
    css_compression :yui

  end

  get '/' do
    haml :index, :format => :html5
  end

end
