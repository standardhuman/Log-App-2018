require 'sinatra'
require 'rest-client'
require 'json'

CLIENT_ID = ENV['16829f78b1811c8795f1
']
CLIENT_SECRET = ENV['dbcb592ebade2bebb1b71a6423c93a6b9b37e2b8']

get '/' do
  erb :index, :locals => {:client_id => CLIENT_ID}
end