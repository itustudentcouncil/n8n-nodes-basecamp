"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
exports.Payhawk = void 0
class Payhawk {
  constructor() {
    this.name = "payhawk"
    this.displayName = "Payhawk"
    this.documentationUrl =
      "https://docs.n8n.io/integrations/creating-nodes/build/declarative-style-node/"
    this.properties = [
      {
        displayName: "API Key",
        name: "apiKey",
        type: "string",
        default: "",
        typeOptions: {
          password: true
        }
      },
      {
        displayName: "Base URL",
        name: "baseUrl",
        type: "string",
        default: "https://api.payhawk.com/api/v3/",
        description: "The base"
      }
    ]
    this.authenticate = {
      type: "generic",
      properties: {
        headers: {
          "X-Payhawk-ApiKey": "={{$credentials.apiKey}}"
        }
      }
    }
  }
}
exports.Payhawk = Payhawk
//# sourceMappingURL=Payhawk.credentials.js.map
