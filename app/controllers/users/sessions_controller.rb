class Users::SessionsController < Devise::SessionsController
  skip_before_action :authenticate_user!, only: :new

  def new
    super
  end

  def create
    super
  end

  def destroy
    super
  end
end
