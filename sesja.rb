class SesjaLinuksowa < Sinatra::Application

  configure do
    register Sinatra::R18n
    R18n::I18n.default = 'pl'
    register Sinatra::AssetPack
    register Sinatra::Partial
    set :partial_template_engine, :haml
    set :haml, :format => :html5
    set :edition => ""
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
    haml :index
  end
  
  post '/' do
    require 'base64'
    require 'net/smtp'
    subject = "[FORMULARZ KONTAKTOWY] #{params['name']} <#{params['email']}>"
    subject = "=?UTF-8?B?#{Base64.encode64(subject).gsub(/\s+/,'')}?="
    mail = <<EMAIL
      From: #{settings.edition}. Sesja Linuksowa <asiwww@tramwaj.asi.pwr.wroc.pl>
      To: <sesja@linuksowa.pl>
      MIME-Version: 1.0
      Content-type: text/plain; charset=utf-8
      Subject: #{subject}
      #{params['content']}
EMAIL
    Net::SMTP.start('localhost', 25) { |smtp| smtp.send_message mail, 'asiwww@tramwaj.asi.pwr.wroc.pl', 'sesja@linuksowa.pl' }
    redirect '/'
  end

  not_found do
    haml :notfound
  end

  error do
    haml :error
  end

end
