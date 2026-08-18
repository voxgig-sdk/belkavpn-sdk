
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'Belkavpn',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://api.belkavpn.com",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      proxy_server: {
      },

    }
  }


  entity = {
    "proxy_server": {
      "fields": [
        {
          "name": "country",
          "type": "`$STRING`"
        },
        {
          "name": "host",
          "type": "`$STRING`"
        },
        {
          "name": "port",
          "type": "`$INTEGER`"
        },
        {
          "name": "status",
          "type": "`$STRING`"
        }
      ],
      "name": "proxy_server",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/socks",
              "parts": [
                "socks"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

