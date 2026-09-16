# Belkavpn SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module BelkavpnFeatures
  def self.make_feature(name)
    case name
    when "base"
      BelkavpnBaseFeature.new
    when "ratelimit"
      BelkavpnRatelimitFeature.new
    when "retry"
      BelkavpnRetryFeature.new
    when "test"
      BelkavpnTestFeature.new
    when "timeout"
      BelkavpnTimeoutFeature.new
    else
      BelkavpnBaseFeature.new
    end
  end
end
