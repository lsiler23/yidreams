class DreamsController < ApplicationController
  before_action :require_login

  def index
    query = params[:query]

    if query.present?
      @dreams = Dream.where(author_id: @current_user.id).where('body ~ ?', query)
    else
      @dreams = Dream.where.not(author_id: @current_user.id).where(is_private: false)
    end
  end

  def create
    body = params.require(:body)
    author_id = current_user.id
    is_private = params.require(:is_private)

    initial_dream = Dream.new(body: body, author_id: author_id, is_private: is_private)

    new_dream = create_new_dream(initial_dream)

    if new_dream
      render json: new_dream, status: 200
    else
      render json: { errors: new_dream.errors }, status: 422
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

  private

  def create_new_dream(dream)
    if dream[:is_private]
      encrypted_dream = Dream.handle_encryption(dream)
      Dream.handle_decryption(encrypted_dream)
    else
      dream.save
    end
  end
end
