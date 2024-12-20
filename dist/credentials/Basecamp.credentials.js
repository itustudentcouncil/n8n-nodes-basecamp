"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basecamp = void 0;
class Basecamp {
    constructor() {
        this.name = "basecampOAuth2Api";
        this.extends = ["oAuth2Api"];
        this.displayName = "Basecamp API";
        this.documentationUrl = "raindrop";
        this.properties = [
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
                default: "https://launchpad.37signals.com/authorization/new?type=web_server"
            },
            {
                displayName: "Access Token URL",
                name: "accessTokenUrl",
                type: "hidden",
                default: "https://launchpad.37signals.com/authorization/token?type=web_server"
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
        ];
    }
}
exports.Basecamp = Basecamp;
//# sourceMappingURL=Basecamp.credentials.js.map