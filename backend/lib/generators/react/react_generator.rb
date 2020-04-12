# frozen_string_literal: true

class ReactGenerator < Rails::Generators::Base
  source_root File.expand_path("templates", __dir__)
  argument :controller_name, type: :string, default: false
  argument :action_name, type: :string, default: false
  attr_accessor :controller_path, :folder_deepness

  def set_up
    @controller_path = "app/controllers/#{controller_name}_controller.rb"
    @jsx_path = "app/javascript/components/#{controller_name}/#{action_name.split('_').map(&:capitalize).join}.jsx"
    @folder_deepness = controller_name.split("/").count
  end

  def generate_controller
    unless File.exist?(controller_path)
      generate "controller", "#{controller_name} #{action_name} --skip-template-engine"
    end
  end

  def generate_action
    if File.read(controller_path).include?("def #{action_name}")
      inject_into_file @controller_path, after: "def #{action_name}" do
        <<-RUBY
    \n
    data = {
      helloReact: "Hello React from #{@jsx_path}"
    }

    to_react(data)
        RUBY
      end
    else
      p "#####Add action, routes for generated component.#####"
    end
  end

  def generate_react
    template "page.js.erb", @jsx_path
  end
end
