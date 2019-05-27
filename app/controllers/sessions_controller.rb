class SessionsController < ApplicationController
  def create
    @user = User.find_by_creds(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)

      render 'users/show.json.jbuilder', status: 200
    else
      render json: { errors: ['Try Again'] }, status: 422
    end
  end

  def destroy
    if logged_in?
      logout
      render json: { }
    else
      render json: { }, status: 404
    end
  end
end
