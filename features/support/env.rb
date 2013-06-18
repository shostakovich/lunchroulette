require 'cucumber/rails'

Capybara.javascript_driver = :webkit

ActionController::Base.allow_rescue = false

require 'email_spec' # add this line if you use spork
require 'email_spec/cucumber'

begin
  DatabaseCleaner.strategy = :truncation
rescue NameError
  raise "You need to add database_cleaner to your Gemfile (in the :test group) if you wish to use it."
end

Cucumber::Rails::Database.javascript_strategy = :truncation

