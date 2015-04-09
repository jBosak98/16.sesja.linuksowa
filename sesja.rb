class SesjaLinuksowa < Sinatra::Application

  configure do
    # Nie zapomnij zmienić tego!
    set :edition => ""

    register Sinatra::R18n
    R18n::I18n.default = 'pl'
    register Sinatra::AssetPack
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

  assets do
    serve '/css', :from => "assets/css"

    serve '/js', :from => "assets/js"

    serve '/jquery', :from => "assets/jquery"
    js :jquery, '/jquery/jquery.js', [
      '/jquery/dist/jquery.js'
    ]

    serve '/bootstrap', :from => "assets/bootstrap"
    css :bootstrap, '/bootstrap/bootstrap.css', [
      '/bootstrap/dist/css/bootstrap.css',
      '/bootstrap/dist/css/bootstrap-theme.css'
    ]
    js :bootstrap, '/bootstrap/bootstrap.js', [
      '/bootstrap/dist/js/bootstrap.js'
    ]

    js_compression :yui
    css_compression :yui
  end

  get '/' do
    haml :index, :locals => {:edition => settings.edition}
  end
  
  post '/' do

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
  end

  not_found do
    haml :notfound
  end

  error do
    haml :error
  end

end
