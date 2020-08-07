class User < ApplicationRecord
  validates :password, length: { minimum: 6, allow_nil: true}

  has_many :dreams, foreign_key: :author_id

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_creds(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def decrypt_all_dreams
    dreams.map do |dream|
      if dream[:is_private]
        Dream.handle_decryption(dream)
      else
        dream
      end
    end
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def friends
    User.where(id: self.friend_ids)
  end
end
