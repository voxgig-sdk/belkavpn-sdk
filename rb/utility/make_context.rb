# Belkavpn SDK utility: make_context
require_relative '../core/context'
module BelkavpnUtilities
  MakeContext = ->(ctxmap, basectx) {
    BelkavpnContext.new(ctxmap, basectx)
  }
end
