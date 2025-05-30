"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basecamp = void 0;
const n8n_openapi_node_1 = require("@devlikeapro/n8n-openapi-node");
const doc = __importStar(require("./Basecamp.api.json"));
const parser = new n8n_openapi_node_1.N8NPropertiesBuilder(doc, {});
const properties = parser.build();
const name = "basecamp";
const displayName = "Basecamp";
class Basecamp {
    constructor() {
        this.description = {
            name,
            displayName,
            icon: `file:${displayName}.svg`,
            description: "Interact with the Basecamp API",
            defaults: { name: displayName },
            properties,
            credentials: [
                {
                    name: "basecampOAuth2Api",
                    required: true
                }
            ],
            usableAsTool: true,
            requestDefaults: {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                baseURL: '={{"https://3.basecampapi.com/" + $credentials.basecampId}}',
            },
            version: 1,
            group: ["transform"],
            subtitle: '={{$parameter["operation"]}}',
            inputs: ["main"],
            outputs: ["main"]
        };
    }
}
exports.Basecamp = Basecamp;
//# sourceMappingURL=Basecamp.node.js.map