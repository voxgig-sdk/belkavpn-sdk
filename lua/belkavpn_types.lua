-- Typed models for the Belkavpn SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class ProxyServer
---@field country? string
---@field host? string
---@field port? number
---@field status? string

---@class ProxyServerListMatch
---@field country? string
---@field host? string
---@field port? number
---@field status? string

local M = {}

return M
