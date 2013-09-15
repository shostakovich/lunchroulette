class User < ActiveRecord::Base
  has_secure_password

  attr_accessible :email, :password, :password_confirmation

  validates_uniqueness_of :email

  def self.register(params)
    user = create!(params)
    UserMailer.confirm_account(user).deliver
    user
  end
end
