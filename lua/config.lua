-- Belkavpn SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Belkavpn",
      slug = "belkavpn",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://api.belkavpn.com",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["proxy_server"] = {},
      },
    },
    entity = {
      ["proxy_server"] = {
        ["fields"] = {
          {
            ["name"] = "country",
            ["short"] = "The country where the proxy server is located",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "host",
            ["short"] = "The hostname or IP address of the proxy server",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "port",
            ["short"] = "The port number of the proxy server",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "status",
            ["short"] = "The operational status of the proxy server",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "proxy_server",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/socks",
                ["parts"] = {
                  "socks",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
