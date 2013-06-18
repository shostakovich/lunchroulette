Given "I have provided credentials" do
  visit '/#/sign-up'

  fill_in 'user', :with => 'user@example.com'
  fill_in 'password', :with => '123456'
  fill_in 'confirmation', :with => '123456'
end

When 'I sign up' do
  click_button('Anmelden')
end

Then 'I should receive an email to confirm my account' do
  sleep(0.1)
  User.exists?(:email => 'user@example.com').should be_true
end
