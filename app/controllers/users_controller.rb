class UsersController < ApplicationController
  respond_to :json

  def create
    respond_with User.create(params[:user])
  end
end
