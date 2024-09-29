"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zitadel = exports.createAccessTokenInterceptor = void 0;
const auth_1 = require("./proto/src/api/generated/zitadel/auth");
const user_service_1 = require("./proto/src/api/generated/zitadel/user/v2/user_service");
const nice_grpc_1 = require("nice-grpc");
const name = "zitadel";
const displayName = "Zitadel";
const apiEndpoint = "https://zitadel.studentcouncil.dk";
const clients = {
    userservice: user_service_1.UserServiceDefinition,
    authservice: auth_1.AuthServiceDefinition
};
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
const getUser = user_service_1.UserServiceDefinition.methods.getUserByID.requestType.fromPartial({});
const createOperations = (service) => ({
    displayName: "Operation",
    name: "operation",
    type: "options",
    options: Object.keys(service.methods).map((name) => ({
        name,
        value: name
    })),
    default: "userservice",
    required: true
});
const createOperationProperties = (service) => {
    const properties = [];
    for (const name of Object.keys(service.methods)) {
        const method = service.methods[name];
        const request = method.requestType.fromPartial({});
        for (const key of Object.keys(request)) {
            const property = {
                displayName: key,
                name: key,
                type: "string",
                default: "",
                required: true,
                displayOptions: {
                    show: {
                        operation: [name]
                    }
                }
            };
            properties.push(property);
        }
    }
    return properties;
};
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
                    options: [
                        {
                            name: "UserService",
                            value: "userservice"
                        }
                    ],
                    default: "userservice",
                    noDataExpression: true,
                    required: true,
                    description: "Create a new contact"
                },
                createOperations(user_service_1.UserServiceDefinition),
                ...createOperationProperties(user_service_1.UserServiceDefinition)
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
        const client = createClient(user_service_1.UserServiceDefinition, apiEndpoint, personalAccessToken);
        const outputData = [{ json: {} }];
        return this.prepareOutputData(outputData);
    }
}
exports.Zitadel = Zitadel;
//# sourceMappingURL=Zitadel.node.js.map