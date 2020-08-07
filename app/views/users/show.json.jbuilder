json.set! :user do
  json.partial! 'users/user', user: current_user
  json.dream_ids current_user.dream_ids
end

json.dreams current_user.decrypt_all_dreams, :id, :body, :is_private, :created_at
json.friends current_user.friends, :id, :username
