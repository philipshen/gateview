# frozen_string_literal: true

class ApplicationController < ActionController::API
  def render_react(data = nil, component = "#{controller_path}/#{action_name.classify}")
    # @react = true
    props = { header: { headers: { 'X-CSRF-Token': form_authenticity_token } }, params: params }
    # Don't double nest data key from fast_jsonapi
    if data.is_a?(Hash) && (data.key?(:data) || data.key?("data"))
      props.merge!(data)
    else
      props[:data] = data
    end
    # props = props.merge!(
    #   {currentUser: current_user || User.new
    #   }) if (defined? current_user) && current_user.present?

    # TODO: doesn't server render. See
    # https://github.com/reactjs/react-rails/issues/925. Not ideal, but we can
    # revisit
    render component: component, props: props, prerender: false
  end
end
