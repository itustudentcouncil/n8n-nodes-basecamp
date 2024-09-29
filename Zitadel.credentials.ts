import {
  IAuthenticateGeneric,
  ICredentialType,
  INodeProperties
} from "n8n-workflow"

export class Zitadel implements ICredentialType {
  name = "zitadel"
  displayName = "Zitadel"
  // Uses the link to this tutorial as an example
  // Replace with your own docs links when building your own nodes
  documentationUrl =
    "https://docs.n8n.io/integrations/creating-nodes/build/declarative-style-node/"
  properties: INodeProperties[] = [
    {
      displayName: "Personal Access Token",
      name: "pat",
      type: "string",
      default: "",
      typeOptions: {
        password: true
      }
    }
  ]
  authenticate = {
    type: "generic",
    properties: {
      qs: {
        api_key: "={{$credentials.pat}}"
      }
    }
  } as IAuthenticateGeneric
}
