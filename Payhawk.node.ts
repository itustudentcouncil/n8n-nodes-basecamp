import { INodeType } from "n8n-workflow"
import {
  DefaultOperationParser,
  N8NPropertiesBuilder,
  N8NPropertiesBuilderConfig,
  OperationContext
} from "@devlikeapro/n8n-openapi-node"
import lodash from "lodash"
import { OpenAPIV3 } from "openapi-types"

import * as doc from "./payhawk.api.json"

for (const path in doc.paths) {
  const methods = doc.paths[path as keyof typeof doc.paths] as Record<
    string,
    OpenAPIV3.OperationObject
  >
  for (const method in methods) {
    const operation = methods[method as keyof typeof methods]
    // remove if operation does not have parameters
    operation.operationId = operation.summary
  }
}

export class CustomOperationParser extends DefaultOperationParser {
  name(
    operation: OpenAPIV3.OperationObject,
    context: OperationContext
  ): string {
    return lodash.startCase(operation.summary)
  }
}

const config: N8NPropertiesBuilderConfig = {
  operation: new CustomOperationParser()
}
const parser = new N8NPropertiesBuilder(doc, config)
const properties = parser.build()

const name = "payhawk"
const displayName = "Payhawk"

export class Payhawk implements INodeType {
  description = {
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
  }
}
