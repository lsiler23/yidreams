json.set! :user do
  json.partial! 'users/user', user: current_user
  json.dream_ids current_user.dream_ids
end

json.dreams current_user.dreams, :body, :is_private, :created_at
