const name = "basecamp"
const displayName = "Basecamp"

const routes = {
  people: {
    index: "people",
    people_on_project: "projects/:id/people",
    users: "projects/:id/people/users"
  },
  projects: {
    index: "projects",
    show: "projects/:id"
  },
  uploads: {
    index: "buckets/:projectId/vaults/:vaultId/uploads",
    show: "buckets/:projectId/uploads/:uploadId",
    create: "buckets/:projectId/vaults/:vaultId/uploads",
    update: "buckets/:projectId/uploads/:uploadId",
    delete: "buckets/:projectId/uploads/:uploadId"
  }
}

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

const resources = Object.keys(routes).map((key) => ({
  name: capitalize(key),
  value: key
}))

const actionToLabel = {
  index: "Get all",
  show: "Get",
  create: "Create",
  update: "Update",
  delete: "Delete"
}

const actions = Object.keys(routes).map((action) =>
  createAction(
    action,
    Object.keys(routes[action]).map((key) => ({
      name: actionToLabel[key],
      value: key,
      action: key
    }))
  )
)

class Basecamp {
  description = {
    description: "Interact with the Basecamp API",

    name,
    displayName,
    icon: `file:dist/${displayName}.svg`,

    defaults: { name: displayName },

    properties: [resourceSelector, ...actions, idSelector, body],

    credentials: [
      {
        name: "oAuth2Api",
        required: true
      }
    ],

    version: 1,
    group: ["transform"],
    subtitle: '={{$parameter["operation"]}}',
    inputs: ["main"],
    outputs: ["main"]
  }

  async execute() {
    const baseUrl = "https://3.basecampapi.com"
    const baseID = 5278257
    const resource = this.getNodeParameter("resource", 0)
    const operation = this.getNodeParameter("operation", 0)
    let body

    let method = "GET"

    if (operation === "users") {
      method = "PUT"
      body = this.getNodeParameter("body", 0)
    }

    const req = (uri) =>
      this.helpers.requestWithAuthentication.call(this, "oAuth2Api", {
        uri,
        method,
        body: body ? JSON.parse(body) : undefined,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        resolveWithFullResponse: true,
        json: true
      })

    let route = routes[resource][operation]

    // if parent id is required
    if (route.includes(":id")) {
      const parent_id = this.getNodeParameter("parent_id", 0)
      route = route.replace(":id", parent_id)
    }

    let uri = `${baseUrl}/${baseID}/${route}.json`

    let data = []

    for (let i = 0; i < 10; i++) {
      const {
        body,
        headers: { link }
      } = await req(uri)

      // if not array
      if (!Array.isArray(body)) {
        return [this.helpers.returnJsonArray([body])]
      }

      data.push(...body)

      if (!link) break

      uri = link.split(";")[0].replace("<", "").replace(">", "")
    }

    return [this.helpers.returnJsonArray(data)]
  }
}

const resourceSelector = {
  displayName: "Resource Type",
  name: "resource",

  noDataExpression: true,

  type: "options",
  default: resources[0].value,
  options: resources
}

function createAction(resource, options) {
  return {
    displayName: "Operation",
    name: "operation",
    type: "options",

    noDataExpression: true,

    displayOptions: {
      show: {
        resource: [resource]
      }
    },

    options: options,
    default: options[0].value
  }
}

const idSelector = {
  displayName: "ID",
  description: "",
  name: "parent_id",
  type: "number",
  required: true,

  displayOptions: {
    show: {
      operation: Object.entries(routes).flatMap(([resource, operations]) =>
        Object.keys(operations)
          .filter((operation) => operations[operation].includes(":id"))
          .map((operation) => `${operation}`)
      )
    }
  }
}

const body = {
  displayName: "Body",
  description: "The body of the request",
  name: "body",
  type: "json",
  required: true,

  displayOptions: {
    show: {
      operation: ["users"]
    }
  }
}

module.exports = { Basecamp }
