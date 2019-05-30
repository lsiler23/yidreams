class DreamsController < ApplicationController
  before_action :require_login

  def index
    query = params[:query]

    if query.present?
      @dreams = Dream.where(author_id: @current_user.id).where('body ~ ?', query)
    else
      @dreams = Dream.all
    end
  end

  def create
    body = params.require(:body)
    author_id = current_user.id
    is_private = params.require(:is_private)

    dream = Dream.new(body: body, author_id: author_id, is_private: is_private)

    if dream.save
      render json: dream, status: 200
    else
      render json: { errors: dream.errors }, status: 422
    end
  end

  def update
    update_params = {
      body: params.require(:body),
      is_private: params.require(:is_private)
    }

    dream = Dream.find(params.require(:id))

    if dream.update!(update_params)
      render json: dream, status: 200
    else
      render json: { errors: dream.errors }, status: 422
    end
  end
end
