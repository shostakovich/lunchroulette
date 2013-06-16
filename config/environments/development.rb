Lunchroulette::Application.configure do
  config.cache_classes = false
  config.action_mailer.default_url_options = { :host => 'localhost:3000' }

  config.whiny_nils = true

  config.consider_all_requests_local       = true
  config.action_controller.perform_caching = false

  config.action_mailer.raise_delivery_errors = false

  config.active_support.deprecation = :log

  config.action_dispatch.best_standards_support = :builtin

  config.active_record.mass_assignment_sanitizer = :strict

  config.active_record.auto_explain_threshold_in_seconds = 0.5

  config.assets.compress = false

  config.assets.precompile += %w(.html .ttf .svg .ttf .woff)
  config.assets.paths << "#{Rails.root}/app/assets/font"
  config.assets.paths << "#{Rails.root}/app/assets/templates"

  config.assets.debug = true
end