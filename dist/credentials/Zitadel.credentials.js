"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zitadel = void 0;
class Zitadel {
    constructor() {
        this.name = "zitadel";
        this.displayName = "Zitadel";
        this.documentationUrl = "https://docs.n8n.io/integrations/creating-nodes/build/declarative-style-node/";
        this.properties = [
            {
                displayName: "Personal Access Token",
                name: "pat",
                type: "string",
                default: "",
                typeOptions: {
                    password: true
                }
            }
        ];
        this.authenticate = {
            type: "generic",
            properties: {
                qs: {
                    api_key: "={{$credentials.pat}}"
                }
            }
        };
    }
}
exports.Zitadel = Zitadel;
//# sourceMappingURL=Zitadel.credentials.js.map