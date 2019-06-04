class Dream < ApplicationRecord
  belongs_to :user, foreign_key: :author_id

  attr_reader :is_private

  def self.handle_encryption(dream)
    @crypt ||= ActiveSupport::MessageEncryptor.new(Rails.application.secrets.secret_key_base)
    dream.body = @crypt.encrypt_and_sign(dream.body)
    dream.save
    dream
  end

  def self.handle_decryption(encrypted_dream)
    @crypt ||= ActiveSupport::MessageEncryptor.new(Rails.application.secrets.secret_key_base)

    {
      id: encrypted_dream.id,
      body: @crypt.decrypt_and_verify(encrypted_dream.body),
      author_id: encrypted_dream.author_id,
      is_private: encrypted_dream.is_private,
      created_at: encrypted_dream.created_at
    }
  end
end
