class UserMailer < ActionMailer::Base
  default from: "from@example.com"

  def confirm_account(user)
    @user = user
    mail(to: user.email, subject: "You have to confirm your email-address")
  end
end
