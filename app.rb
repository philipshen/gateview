# frozen_string_literal: true

require 'sinatra'
require 'sinatra/reloader' if development?

require 'net/http'
require 'uri'

require 'byebug'

get '/test-twitter' do
  # Redirect to twitter logged in
  uri = URI.parse('https://twitter.com/sessions')
  request = Net::HTTP::Post.new(uri)
  request.content_type = 'application/x-www-form-urlencoded'
  request['Authority'] = 'twitter.com'
  request['Cache-Control'] = 'max-age=0'
  request['Origin'] = 'https://twitter.com'
  request['Upgrade-Insecure-Requests'] = '1'
  request['User-Agent'] = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36'
  request['Sec-Fetch-Dest'] = 'document'
  request['Accept'] = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
  request['Sec-Fetch-Site'] = 'same-origin'
  request['Sec-Fetch-Mode'] = 'navigate'
  request['Sec-Fetch-User'] = '?1'
  request['Referer'] = 'https://twitter.com/login'
  request['Accept-Language'] = 'en-US,en;q=0.9'
  request['Cookie'] = 'personalization_id="v1_p3vkaKR6uGaBeXExJvegtw=="; guest_id=v1%3A158665085726077122; gt=1249130348581093378; ct0=9b6eff7cabf86e548edf534adc44c26e; _sl=1; _twitter_sess=BAh7CSIKZmxhc2hJQzonQWN0aW9uQ29udHJvbGxlcjo6Rmxhc2g6OkZsYXNo%250ASGFzaHsABjoKQHVzZWR7ADoPY3JlYXRlZF9hdGwrCKXGwmtxAToMY3NyZl9p%250AZCIlMmUyMTVlZmRmZmY4MGU5ZmIzM2QyMTM5ZjhlMjIwZTM6B2lkIiU3MTg0%250AMjNiNWIyZTU1MmFhMzUyZDU1NWRiMWE3MzQ5Mw%253D%253D--6b26fbfceded825a7133e5b9dfc5a26a42b13910; _mb_tk=8ceb6bb07c5311eaa0304554bb973a3c'
  request.set_form_data(
    'authenticity_token' => '8ceb6bb07c5311eaa0304554bb973a3c',
    'redirect_after_login' => '/home',
    'remember_me' => '1',
    'session[password]' => 'gateview123!!',
    'session[username_or_email]' => 'GateviewApp',
    'ui_metrics' => '{"rf":{"a453948e64a219f57b0f78efe2292248ae1ff6bfd337c962860f44870514f214":-1,"ea1350cb6e7c7155c925f02a1dc0d38fbda6b85a8b08c76996146bc915b81683":0,"c6119151488253532303599a282be10e839e1e0076e515cccbc66422cf4cec86":0,"f7e413c9ef46f318da092da3fc4832459eeb0fe78bdacf629f0adb7ab6b405d5":0},"s":"vxyRLbwV0E5RwTEQTzjgU_PBB5sP4j_b7TfvWbuix2U6PolqPXTbbG_fSlDMqNDMtel8-iY1mg_YPM151W58th7AF_snX_R1ZpAwJCZTgyPnV9Lglw8nyP_25f-uov2IAR-1iaZW3UC63GlqYyTHBSL6I8w4z8jM6R-ATmrW04o9uF6-BUPLObdLURbbaPNmQMNI1bIe0Gx8mCPCrqDwEmVld5LI0XRi2DRH5YFhIW55VLmcHb6Vqh0peyJB0n3EbJkaA7AcfwzmysYokCm6JgWlEzkD3TzBUIvAKGq9w66QnW9ldLP6Kdl2BFOzjett4PtdOOKYtISizd3Lk0sx_AAAAXFrwzXX"}',
    'wfa' => '1'
  )

  req_options = {
    use_ssl: uri.scheme == 'https'
  }

  response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
    http.request(request)
  end

  byebug

  # response.code
  # response.body

  redirect 'https://www.twitter.com/home', 'hello'
end

get '/test-slack' do
  uri = URI.parse('https://gather1.slack.com')
  request = Net::HTTP::Post.new(uri)
  request.content_type = 'application/x-www-form-urlencoded'
  request['User-Agent'] = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36'
  request.set_form_data(
    :signin => 1,
    :has_remember => 1,
    :email => 'philipshen13@gmail.com',
    :password => 'xfniJ!xqcl!9YK184#Qg!oO3MJJAg2ILS0^'
  )

  req_options = { use_ssl: uri.scheme == 'https' }
  response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
    http.request(request)
  end

  return response.body
end
