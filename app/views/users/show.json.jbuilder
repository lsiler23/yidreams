json.set! :user do
  json.partial! 'users/user', user: current_user
  json.dream_ids current_user.dream_ids
end

json.set! :dreams do
  current_user.dreams.each do |dream|
    json.set! dream.id do
      json.extract! dream, :id, :body, :is_private, :created_at
    end
  end
end
