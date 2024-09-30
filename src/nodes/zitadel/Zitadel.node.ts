import { AuthServiceDefinition } from "../../generated/zitadel/auth"
import { UserServiceDefinition } from "../../generated/zitadel/user/v2/user_service"
import {
  createChannel,
  createClientFactory,
  Metadata,
  ServiceDefinition
} from "nice-grpc"

import { IExecuteFunctions, INodeType } from "n8n-workflow"

const name = "zitadel"
const displayName = "Zitadel"
const apiEndpoint = "https://zitadel.studentcouncil.dk"

const clients: {
  [key: string]: typeof UserServiceDefinition | typeof AuthServiceDefinition
} = {
  userservice: UserServiceDefinition,
  authservice: AuthServiceDefinition
}

function createClient(
  definition: ServiceDefinition,
  apiEndpoint: string,
  ...interceptors: any[]
) {
  const channel = createChannel(apiEndpoint)
  let factory = createClientFactory()
  for (const interceptor of interceptors) {
    factory = factory.use(interceptor)
  }
  return factory.create(definition, channel)
}

export const createAccessTokenInterceptor = (token: string) =>
  async function* (call: any, options: any) {
    options.metadata ??= new Metadata()
    if (!options.metadata.has("authorization")) {
      options.metadata.set("authorization", `Bearer ${token}`)
    }
    return yield* call.next(call.request, options)
  }

const getUser =
  UserServiceDefinition.methods.getUserByID.requestType.fromPartial({})

const createOperations = (service: ServiceDefinition) => ({
  displayName: "Operation",
  name: "operation",
  type: "options" as const,
  options: Object.keys(service.methods).map((name) => ({
    name,
    value: name
  })),
  default: "userservice",
  required: true
})

const createOperationProperties = (service: ServiceDefinition) => {
  const properties = []
  for (const name of Object.keys(service.methods)) {
    const method = (service.methods as any)[name]
    const request = method.requestType.fromPartial({})
    for (const key of Object.keys(request)) {
      const property = {
        displayName: key,
        name: key,
        type: "string" as const,
        default: "",
        required: true,
        displayOptions: {
          show: {
            operation: [name]
          }
        }
      }
      properties.push(property)
    }
  }
  return properties
}

export class Zitadel implements INodeType {
  description = {
    description: "Interact with the Zitadel API",

    name,
    displayName,
    icon: `file:${displayName}.svg`,

    defaults: { name: displayName },

    properties: [
      {
        displayName: "Service",
        name: "service",
        type: "options" as const,
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
      createOperations(UserServiceDefinition as any),
      ...createOperationProperties(UserServiceDefinition as any)
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
  }

  async execute(this: IExecuteFunctions) {
    const credentials = await this.getCredentials("zitadel")
    const personalAccessToken = createAccessTokenInterceptor(
      credentials.pat as string
    )

    const client = createClient(
      UserServiceDefinition as unknown as ServiceDefinition,
      apiEndpoint,
      personalAccessToken
    )
    //const outputData = users.map((user: any) => ({ json: user }))
    const outputData = [{ json: {} }]
    return this.prepareOutputData(outputData)
  }
}
