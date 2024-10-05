import { OrganizationServiceDefinition } from "./../../generated/zitadel/org/v2/org_service"
import { UserSchemaServiceDefinition } from "./../../generated/zitadel/resources/userschema/v3alpha/user_schema_service"
import { AdminServiceDefinition } from "./../../generated/zitadel/admin"
import { ZITADELActionsDefinition } from "./../../generated/zitadel/resources/action/v3alpha/action_service"
import { ManagementServiceDefinition } from "./../../generated/zitadel/management"
import { AuthServiceDefinition } from "../../generated/zitadel/auth"
import { UserServiceDefinition } from "../../generated/zitadel/user/v2/user_service"
import {
  Client,
  createChannel,
  createClientFactory,
  Metadata,
  ServiceDefinition
} from "nice-grpc"

import { IExecuteFunctions, INodeType } from "n8n-workflow"

const name = "zitadel"
const displayName = "Zitadel"
const apiEndpoint = "https://zitadel.studentcouncil.dk"

const services = [
  UserServiceDefinition,
  OrganizationServiceDefinition,
  AuthServiceDefinition,
  ManagementServiceDefinition,
  AdminServiceDefinition,
  ZITADELActionsDefinition,
  UserSchemaServiceDefinition
]
type Services = (typeof services)[number]

const clients: {
  [key: string]: Services
} = services.reduce(
  (
    acc: {
      [key: string]: Services
    },
    service
  ) => {
    acc[service.name] = service
    return acc
  },
  {}
)

console.log(OrganizationServiceDefinition.methods, "")

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

const createOperations = (service: Services) => ({
  displayName: "Operation",
  name: "operation",
  type: "options" as const,
  options: Object.keys(service.methods).map((name) => {
    return {
      name,
      value: name
    }
  }),
  displayOptions: {
    show: {
      service: [service.name]
    }
  },
  default: "userservice",
  required: true
})

const createOperationProperties = (service: ServiceDefinition) => {
  const properties = []
  for (const name of Object.keys(service.methods)) {
    const method = (service.methods as any)[name]
    const request = method.requestType.fromPartial({})
    for (const key of Object.keys(request)) {
      const defaultValues: { [key: string]: string } = {
        query: `{\n "limit": 10,\n "offset": 0,\n "order": "ASC"\n}`,
        queries: `[]`
      }
      const isQuery = ["query", "queries"].includes(key)
      const type = isQuery ? ("json" as const) : ("string" as const)

      const value: string = defaultValues[key] ?? ""

      const property = {
        displayName: key,
        name: key,
        type,
        default: value,
        required: true,

        displayOptions: {
          show: {
            service: [service.name as unknown as string],
            operation: [name as string]
          }
        }
      }
      properties.push(property)
    }
  }
  return properties
}

const allOperations = Object.values(clients).map((service) =>
  createOperations(service as unknown as Services)
)

const allOperationProperties = Object.values(clients).map((service) =>
  createOperationProperties(service as unknown as ServiceDefinition)
)

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
  }

  async execute(this: IExecuteFunctions) {
    const credentials = await this.getCredentials("zitadel")
    const personalAccessToken = createAccessTokenInterceptor(
      credentials.pat as string
    )

    const service = this.getNodeParameter("service", 0) as string

    const serviceDefinition = clients[service]

    const client = createClient(
      serviceDefinition as unknown as ServiceDefinition,
      apiEndpoint,
      personalAccessToken
    ) as Client<typeof serviceDefinition>

    const operation = this.getNodeParameter("operation", 0) as string

    if (operation in serviceDefinition.methods) {
      const method = (serviceDefinition.methods as any)[operation]
      const request = method.requestType.fromPartial({})
      for (const key of Object.keys(request)) {
        const value = this.getNodeParameter(key, 0) as string
        try {
          request[key] = JSON.parse(value)
        } catch {
          request[key] = value
        }
      }
      console.log(request)
      const response = await (client as any)[operation](request)
      return this.prepareOutputData([{ json: response }])
    } else {
      //const outputData = users.map((user: any) => ({ json: user }))
      const outputData = [{ json: {} }]
      return this.prepareOutputData(outputData)
    }
  }
}
