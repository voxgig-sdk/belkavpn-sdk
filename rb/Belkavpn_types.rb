# frozen_string_literal: true

# Typed models for the Belkavpn SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# ProxyServer entity data model.
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] host
#   @return [String, nil]
#
# @!attribute [rw] port
#   @return [Integer, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
ProxyServer = Struct.new(
  :country,
  :host,
  :port,
  :status,
  keyword_init: true
)

# Request payload for ProxyServer#list.
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] host
#   @return [String, nil]
#
# @!attribute [rw] port
#   @return [Integer, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
ProxyServerListMatch = Struct.new(
  :country,
  :host,
  :port,
  :status,
  keyword_init: true
)

