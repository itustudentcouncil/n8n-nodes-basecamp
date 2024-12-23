"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zitadel = exports.createAccessTokenInterceptor = void 0;
const org_service_1 = require("./../../generated/zitadel/org/v2/org_service");
const user_schema_service_1 = require("./../../generated/zitadel/resources/userschema/v3alpha/user_schema_service");
const admin_1 = require("./../../generated/zitadel/admin");
const action_service_1 = require("./../../generated/zitadel/resources/action/v3alpha/action_service");
const management_1 = require("./../../generated/zitadel/management");
const auth_1 = require("../../generated/zitadel/auth");
const user_service_1 = require("../../generated/zitadel/user/v2/user_service");
const nice_grpc_1 = require("nice-grpc");
const name = "zitadel";
const displayName = "Zitadel";
const apiEndpoint = "https://zitadel.studentcouncil.dk";
const services = [
    user_service_1.UserServiceDefinition,
    org_service_1.OrganizationServiceDefinition,
    auth_1.AuthServiceDefinition,
    management_1.ManagementServiceDefinition,
    admin_1.AdminServiceDefinition,
    action_service_1.ZITADELActionsDefinition,
    user_schema_service_1.UserSchemaServiceDefinition
];
const clients = services.reduce((acc, service) => {
    acc[service.name] = service;
    return acc;
}, {});
console.log(org_service_1.OrganizationServiceDefinition.methods, "");
function createClient(definition, apiEndpoint, ...interceptors) {
    const channel = (0, nice_grpc_1.createChannel)(apiEndpoint);
    let factory = (0, nice_grpc_1.createClientFactory)();
    for (const interceptor of interceptors) {
        factory = factory.use(interceptor);
    }
    return factory.create(definition, channel);
}
const createAccessTokenInterceptor = (token) => async function* (call, options) {
    var _a;
    (_a = options.metadata) !== null && _a !== void 0 ? _a : (options.metadata = new nice_grpc_1.Metadata());
    if (!options.metadata.has("authorization")) {
        options.metadata.set("authorization", `Bearer ${token}`);
    }
    return yield* call.next(call.request, options);
};
exports.createAccessTokenInterceptor = createAccessTokenInterceptor;
const createOperations = (service) => ({
    displayName: "Operation",
    name: "operation",
    type: "options",
    options: Object.keys(service.methods).map((name) => {
        return {
            name,
            value: name
        };
    }),
    displayOptions: {
        show: {
            service: [service.name]
        }
    },
    default: "userservice",
    required: true
});
const createOperationProperties = (service) => {
    var _a;
    const properties = [];
    for (const name of Object.keys(service.methods)) {
        const method = service.methods[name];
        const request = method.requestType.fromPartial({});
        for (const key of Object.keys(request)) {
            const defaultValues = {
                query: `{\n "limit": 10,\n "offset": 0,\n "order": "ASC"\n}`,
                queries: `[]`
            };
            const isQuery = ["query", "queries"].includes(key);
            const type = isQuery ? "json" : "string";
            const value = (_a = defaultValues[key]) !== null && _a !== void 0 ? _a : "";
            const property = {
                displayName: key,
                name: key,
                type,
                default: value,
                required: true,
                displayOptions: {
                    show: {
                        service: [service.name],
                        operation: [name]
                    }
                }
            };
            properties.push(property);
        }
    }
    return properties;
};
const allOperations = Object.values(clients).map((service) => createOperations(service));
const allOperationProperties = Object.values(clients).map((service) => createOperationProperties(service));
class Zitadel {
    constructor() {
        this.description = {
            description: "Interact with the Zitadel API",
            name,
            displayName,
            icon: `file:${displayName}.svg`,
            defaults: { name: displayName },
            properties: [
                {
                    displayName: "Service",
                    name: "service",
                    type: "options",
                    options: Object.values(clients).map((client) => ({
                        name: client.name,
                        value: client.name
                    })),
                    default: Object.values(clients)[0].name,
                    noDataExpression: true,
                    required: true,
                    description: "Create a new contact"
                },
                ...allOperations.flat(),
                ...allOperationProperties.flat()
            ],
            credentials: [
                {
                    name: "zitadel",
                    required: false
                }
            ],
            version: 1,
            group: ["transform"],
            subtitle: '={{$parameter["operation"]}}',
            inputs: ["main"],
            outputs: ["main"]
        };
    }
    async execute() {
        const credentials = await this.getCredentials("zitadel");
        const personalAccessToken = (0, exports.createAccessTokenInterceptor)(credentials.pat);
        const service = this.getNodeParameter("service", 0);
        const serviceDefinition = clients[service];
        const client = createClient(serviceDefinition, apiEndpoint, personalAccessToken);
        const operation = this.getNodeParameter("operation", 0);
        if (operation in serviceDefinition.methods) {
            const method = serviceDefinition.methods[operation];
            const request = method.requestType.fromPartial({});
            for (const key of Object.keys(request)) {
                const value = this.getNodeParameter(key, 0);
                try {
                    request[key] = JSON.parse(value);
                }
                catch {
                    request[key] = value;
                }
            }
            console.log(request);
            const response = await client[operation](request);
            return this.prepareOutputData([{ json: response }]);
        }
        else {
            const outputData = [{ json: {} }];
            return this.prepareOutputData(outputData);
        }
    }
}
exports.Zitadel = Zitadel;
//# sourceMappingURL=Zitadel.node.js.map