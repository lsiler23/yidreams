class AddFriendIdsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :friend_ids, :text, array: true
  end
end
