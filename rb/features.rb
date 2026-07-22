# Belkavpn SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module BelkavpnFeatures
  def self.make_feature(name)
    case name
    when "base"
      BelkavpnBaseFeature.new
    when "test"
      BelkavpnTestFeature.new
    else
      BelkavpnBaseFeature.new
    end
  end
end
