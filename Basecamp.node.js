const name = 'basecamp'
const displayName = 'Basecamp'

const routes = {
  people: {
    index: 'people',
    people_on_project: 'projects/:id/people',
    access: 'projects/:id/people/users'
  },
  projects: {
    index: 'projects',
    show: 'projects/:id'
  }
}

class Basecamp {
  description = {
    description: 'Interact with the Basecamp API',
    
    name,
    displayName,
    icon: `file:${name}.png`,

    defaults: { name: displayName },

    properties: [
      pickResource,
      pickAction,
      pickActionPeople,
      pickID,
      body
    ],

    credentials: [{
      name: 'oAuth2Api',
      required: true
    }],
    
    version: 1,
    group: ['transform'],
    subtitle: '={{$parameter["operation"]}}',
    inputs: ['main'],
    outputs: ['main']
  }

  async execute() {
    const baseUrl = "https://3.basecampapi.com"
    const baseID = 5278257
    const resource = this.getNodeParameter('resource', 0)
    const operation = this.getNodeParameter('operation', 0)
    let body

    let method = 'GET'

    if (operation === 'access') {
      method = 'PUT'
      body = this.getNodeParameter('body', 0)
    }

    const req = (uri) => this.helpers.requestWithAuthentication.call(this, 'oAuth2Api', {
      uri,
      method,
      body: body ? JSON.parse(body) : undefined,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      resolveWithFullResponse: true,
      json: true
    })

    console.log(resource, operation)

    let route = routes[resource][operation]
    console.log(route)

    // if parent id is required
    if(route.includes(':id')) {
      const parent_id = this.getNodeParameter('parent_id', 0)
      route = route.replace(':id', parent_id)
    }

    let uri = `${baseUrl}/${baseID}/${route}.json`

    console.log(uri)

    let data = []

    for(let i = 0; i < 10; i++) {
      const { body, headers: { link } } = await req(uri)

      // if not array
      if(!Array.isArray(body)) {
        return [this.helpers.returnJsonArray([body])]
      }
      
      data.push(...body)

      if(!link) break

      uri = link.split(';')[0]
        .replace('<', '')
        .replace('>', '')
    }

    return [this.helpers.returnJsonArray(data)]
  }
}

const pickResource = {
  displayName: 'Recording Type',
  name: 'resource',
  
  noDataExpression: true,
  
  type: 'options',
  default: 'people',
  options: [
    { name: 'People', value: 'people' },
    { name: 'Projects', value: 'projects' }, 
  ]
}

const pickAction = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  
  noDataExpression: true,
  
  displayOptions: {
    show: {
      resource: ['projects'],
    },
  },
  
  options: [
    {
      name: 'Get all projects',
      value: 'index',
      action: 'Get all projects'
    },
    {
      name: 'Get a project',
      value: 'show',
      action: 'Get a project',
    },
  ],
  default: 'index'
}

const pickActionPeople = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  
  noDataExpression: true,
  
  displayOptions: {
    show: {
      resource: ['people'],
    },
  },
  
  options: [
    {
      name: 'Get all people',
      value: 'index',
      action: 'Get all people',
    },
    {
      name: 'Get people on a project',
      value: 'people_on_project',
      action: 'Get people on a project',
    },
    {
      name: 'Update access',
      value: 'access',
      action: 'Update access'
    }
  ],
  default: 'people'
}

const pickID = {
  displayName: 'Parent ID',
  description: '',
  name: 'parent_id',
  type: 'number',
  required: true,

  displayOptions: {
    show: {
      operation: ['show', 'people_on_project', 'access'],
    }
  }
}

const body = {
  displayName: 'Body',
  description: 'The body of the request',
  name: 'body',
  type: 'json',
  required: true,

  displayOptions: {
    show: {
      operation: ['access'],
    }
  }
}

module.exports = { Basecamp }
