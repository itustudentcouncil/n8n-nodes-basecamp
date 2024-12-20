import type { ICredentialType, INodeProperties } from "n8n-workflow"

export class Basecamp implements ICredentialType {
  name = "basecampOAuth2Api"

  extends = ["oAuth2Api"]

  displayName = "Basecamp API"

  documentationUrl = "raindrop"

  properties: INodeProperties[] = [
    {
      displayName: "Basecamp ID",
      name: "basecampId",
      type: "string",
      default: ""
    },
    {
      displayName: "Authorization URL",
      name: "authUrl",
      type: "hidden",
      default:
        "https://launchpad.37signals.com/authorization/new?type=web_server"
    },
    {
      displayName: "Access Token URL",
      name: "accessTokenUrl",
      type: "hidden",
      default:
        "https://launchpad.37signals.com/authorization/token?type=web_server"
    },
    {
      displayName: "Grant Type",
      name: "grantType",
      type: "hidden",
      default: "authorizationCode"
    },
    {
      displayName: "Auth URI Query Parameters",
      name: "authQueryParameters",
      type: "hidden",
      default: ""
    },
    {
      displayName: "Authentication",
      name: "authentication",
      type: "hidden",
      default: "body"
    },
    {
      displayName: "Scope",
      name: "scope",
      type: "hidden",
      default: ""
    }
  ]
}
