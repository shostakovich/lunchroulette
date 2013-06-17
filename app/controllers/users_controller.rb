class UsersController < ApplicationController
  respond_to :json

  def create
    respond_with User.register(params[:user])
  end
end
