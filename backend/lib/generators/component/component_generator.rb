# frozen_string_literal: true

class ComponentGenerator < Rails::Generators::Base
  source_root File.expand_path("templates", __dir__)
  argument :controller_name, type: :string, default: false
  argument :component_name, type: :string, default: false
  attr_accessor :component_path, :folder_deepness

  def set_up
    @component_path = "app/javascript/components/#{controller_name}/children/#{component_name}.jsx"
    @folder_deepness = controller_name.split("/").count
  end

  def generate_component
    template "component.js.erb", @component_path
  end
end
