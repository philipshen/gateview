# frozen_string_literal: true

class DummyController < ApplicationController
  def passwordless_login
    render json: { hello: "goodbye" }
  end
end
