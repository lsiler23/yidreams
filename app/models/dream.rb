require 'csv'

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
      is_private: encrypted_dream[:is_private],
      created_at: encrypted_dream.created_at
    }
  end

  def self.to_csv(current_user)
    dreams = current_user.decrypt_all_dreams

    CSV.generate do |csv|
      columns = %w(id body is_private author_id created_at)
      csv << columns.map(&:humanize)
      dreams.each do |dream|
        attrs = dream.try(:attributes)

        if attrs
          csv << attrs.values_at(*columns)
        else
          csv << dream.with_indifferent_access.values_at(*columns)
        end
      end
    end
  end
end
