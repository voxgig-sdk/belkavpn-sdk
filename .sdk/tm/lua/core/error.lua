-- Belkavpn SDK error

local BelkavpnError = {}
BelkavpnError.__index = BelkavpnError


function BelkavpnError.new(code, msg, ctx)
  local self = setmetatable({}, BelkavpnError)
  self.is_sdk_error = true
  self.sdk = "Belkavpn"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function BelkavpnError:error()
  return self.msg
end


function BelkavpnError:__tostring()
  return self.msg
end


return BelkavpnError
