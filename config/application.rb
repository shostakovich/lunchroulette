require File.expand_path('../boot', __FILE__)

require 'rails/all'

if defined?(Bundler)
  Bundler.require(*Rails.groups(:assets => %w(development test)))
end

ActionController::Base.config.relative_url_root = ''

module Lunchroulette
  class Application < Rails::Application
    config.assets.initialize_on_precompile = false
    config.encoding = "utf-8"

    config.filter_parameters += [:password]
    config.active_support.escape_html_entities_in_json = true
    config.assets.enabled = true
    config.assets.version = '1.0'

    config.assets.precompile += %w(.html .ttf .svg .ttf .woff)
    config.assets.paths << "#{Rails.root}/app/assets/font"
    config.assets.paths << "#{Rails.root}/app/assets/templates"
  end
end
