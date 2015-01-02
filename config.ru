require 'rubygems'
require 'bundler/setup'
Bundler.require(:default, ENV['RACK_ENV'].to_sym)

require "./sesja"
run SesjaLinuksowa
