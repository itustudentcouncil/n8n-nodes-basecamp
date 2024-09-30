import { INodeType } from "n8n-workflow"
import {
  DefaultOperationParser,
  N8NPropertiesBuilder,
  N8NPropertiesBuilderConfig,
  OperationContext
} from "@devlikeapro/n8n-openapi-node"
import lodash from "lodash"
import { OpenAPIV3 } from "openapi-types"

import * as doc from "./Basecamp.api.json"
import * as paths from "./paths.json"
import * as definitions from "./definitions.json"

let json = { ...doc, paths, definitions }

for (const path in json.paths) {
  const methods = json.paths[path as keyof typeof json.paths] as Record<
    string,
    OpenAPIV3.OperationObject
  >
  for (const method in methods) {
    const operation = methods[method as keyof typeof methods]
    // remove if operation does not have parameters
    operation.operationId = operation.summary
  }
}

const config: N8NPropertiesBuilderConfig = {}
const parser = new N8NPropertiesBuilder(json, config)
const properties = parser.build()

const name = "basecamp"
const displayName = "Basecamp"

export class Basecamp implements INodeType {
  description = {
    name,
    displayName,
    icon: `file:${displayName}.svg`,
    description: "Interact with the Basecamp API",

    defaults: { name: displayName },
    properties,

    credentials: [
      {
        name: "basecampOAuth2Api",
        required: false
      }
    ],

    requestDefaults: {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      baseURL: "https://3.basecampapi.com/5278257"
    },

    version: 1,
    group: ["transform"],
    subtitle: '={{$parameter["operation"]}}',
    inputs: ["main"],
    outputs: ["main"]
  }
}
