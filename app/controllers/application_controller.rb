class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  # [STEALTH] EVERYTHING requires authentication
  before_action :authenticate_user!
end
