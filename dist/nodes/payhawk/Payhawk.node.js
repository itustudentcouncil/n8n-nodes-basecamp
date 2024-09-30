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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payhawk = exports.CustomOperationParser = void 0;
const n8n_openapi_node_1 = require("@devlikeapro/n8n-openapi-node");
const lodash_1 = __importDefault(require("lodash"));
const doc = __importStar(require("./payhawk.api.json"));
for (const path in doc.paths) {
    const methods = doc.paths[path];
    for (const method in methods) {
        const operation = methods[method];
        operation.operationId = operation.summary;
    }
}
class CustomOperationParser extends n8n_openapi_node_1.DefaultOperationParser {
    name(operation, context) {
        return lodash_1.default.startCase(operation.summary);
    }
}
exports.CustomOperationParser = CustomOperationParser;
const config = {
    operation: new CustomOperationParser()
};
const parser = new n8n_openapi_node_1.N8NPropertiesBuilder(doc, config);
const properties = parser.build();
const name = "payhawk";
const displayName = "Payhawk";
class Payhawk {
    constructor() {
        this.description = {
            name,
            displayName,
            icon: `file:${displayName}.svg`,
            description: "Interact with the Zitadel API",
            defaults: { name: displayName },
            properties,
            credentials: [
                {
                    name: "payhawk",
                    required: false
                }
            ],
            requestDefaults: {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                baseURL: "={{$credentials.baseUrl}}"
            },
            version: 1,
            group: ["transform"],
            subtitle: '={{$parameter["operation"]}}',
            inputs: ["main"],
            outputs: ["main"]
        };
    }
}
exports.Payhawk = Payhawk;
//# sourceMappingURL=Payhawk.node.js.map