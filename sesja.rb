class SesjaLinuksowa < Sinatra::Application

  configure do
    enable :sessions

    # Nie zapomnij zmienić tego!
    set :edition => ""
    set :hide_talk_submission_form, true

    register Sinatra::R18n

    set :assets_precompile, %w(application.js application.css *.png *.jpg *.svg *.eot *.ttf *.woff)
    set :assets_css_compressor, :sass
    set :assets_js_compressor, :uglifier
    register Sinatra::AssetPipeline

    if defined?(RailsAssets)
      RailsAssets.load_paths.each do |path|
        settings.sprockets.append_path(path)
      end
    end

    register Sinatra::Partial
    set :partial_template_engine, :haml

    set :haml, :format => :html5

    set :default_to => "sesja@linuksowa.pl"
    set :email_options, {
      :from => "asiwww@tramwaj.asi.pwr.wroc.pl"
    }

  end

  if settings.edition.empty?
    abort("Edycja Sesji nie jest ustawiona, zajrzyj do pliku sesja.rb!")
  end

  configure :development do
    use BetterErrors::Middleware
    BetterErrors.application_root = File.expand_path('..', __FILE__)
  end

  get '/' do
    redirect "/pl"
  end

  get '/:locale/?' do
    haml :index, locals: { edition: settings.edition, hide_talk_submission_form: settings.hide_talk_submission_form }
  end

  post '/:locale/?' do

    # Prosty filtr antyspamowy
    redirect '/' unless params[:email].empty?

    require 'pony'
    Pony.options = settings.email_options

    subject = "#{params[:name]} <#{params[:adres]}>"
    body = ""

    if params[:abstract]
      Pony.subject_prefix("[PRELEKCJA] ")
      body << "Temat: #{params[:content]}\n"
      body << "Abstrakt: #{params[:abstract]}\n"
      body << "Długość (min): #{params[:duration]}\n"
      body << "Opis na stronę: #{params[:description]}\n"
      body << "Opis prelegenta: #{params[:aboutyou]}\n"
    else
      Pony.subject_prefix("[FORMULARZ KONTAKTOWY] ")
      body = "#{params[:content]}"
    end
    Pony.mail(:to => settings.default_to, :subject => subject, :body => body)
    redirect '/'
  end

  not_found do
    haml :notfound
  end

  error do
    haml :error
  end

end
