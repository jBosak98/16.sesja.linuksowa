# Szablon Sesji Linuksowej

To jest szablon aplikacji serwującej strone Sesji Linuksowej. Możesz go użyć do
utworzenia strony dla kolejnej edycji Sesji.

# Instrukcja obsługi

1. git clone git@git.asi.wroclaw.pl:sesjalinuksowa/sesja.linuksowa.git
2. cd sesja.linuksowa && bundle install
3. Opcjonalnie zainstaluj i uruchom [Mailcatcher](https://mailcatcher.me/).
4. W pliku `sesja.rb` ustaw symbol `:edition` na numer obecnej edycji Sesji
5. Pliki CSS i JS idą do odopowiednio do `assets/css` oraz `assets/js`. Zajmuje się nimi
   [Sinatra AssetPack](https://github.com/rstacruz/sinatra-assetpack) więc nie
   zapomnij ich dodać w bloku `assets do` w pliku `sesja.rb`.
6. Dopasuj `views/notfound.haml` oraz `views/error.haml` tak żeby pasowały do
   wybranej szaty graficznej.
7. W katalogu `i18n` znajdują się tłumaczenia.
8. W katalogu `public` znajduje się cała reszta która ma być widoczna z
   zewnątrz (rzeczy typu oferta sponsorska albo zdjęcia)
9. W katalogu z plikiem `config.ru` wywołaj polecenie `rackup` i wejdź na
   [http://localhost:9292](http://localhost:9292).
