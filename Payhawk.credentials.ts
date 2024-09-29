import {
  IAuthenticateGeneric,
  ICredentialType,
  INodeProperties
} from "n8n-workflow"

export class Payhawk implements ICredentialType {
  name = "payhawk"
  displayName = "Payhawk"
  // Uses the link to this tutorial as an example
  // Replace with your own docs links when building your own nodes
  documentationUrl =
    "https://docs.n8n.io/integrations/creating-nodes/build/declarative-style-node/"
  properties: INodeProperties[] = [
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
  authenticate = {
    type: "generic",
    properties: {
      headers: {
        "X-Payhawk-ApiKey": "={{$credentials.apiKey}}"
      }
    }
  } as IAuthenticateGeneric
}
