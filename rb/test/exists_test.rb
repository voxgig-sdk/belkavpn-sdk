# Belkavpn SDK exists test

require "minitest/autorun"
require_relative "../Belkavpn_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = BelkavpnSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
