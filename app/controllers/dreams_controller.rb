class DreamsController < ApplicationController

  before_action :require_login

  def create
    body = params.require(:body)
    author_id = current_user.id
    is_private = params.require(:is_private)

    dream = Dream.new(body: body, author_id: author_id, is_private: is_private)

    if dream.save!
      render json: dream, status: 200
    else
      render json: { errors: dream.errors }, status: 422
    end
  end
end
