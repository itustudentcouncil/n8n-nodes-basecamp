const name = 'basecamp'
const displayName = 'Basecamp'


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
    const operation = this.getNodeParameter('operation', 0)

    const req = (uri) => this.helpers.requestWithAuthentication.call(this, 'oAuth2Api', {
      uri,
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      resolveWithFullResponse: true,
      json: true
    })

    let uri = `${baseUrl}/${baseID}/${operation}.json`

    let data = []

    for(let i = 0; i < 10; i++) {
      const { body, headers: { link } } = await req(uri)
      
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
  default: 'project',
  options: [
    { name: 'Project', value: 'project' }, 
    { name: 'People', value: 'people' },
  ]
}

const pickAction = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  
  noDataExpression: true,
  
  displayOptions: {
    show: {
      resource: ['project'],
    },
  },
  
  options: [
    {
      name: 'Get all projects',
      value: 'projects',
      action: 'Get all projects',
    },
    {
      name: 'Get a project',
      value: 'get_project',
      action: 'Get a project',
    },
  ],
  default: 'projects'
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
      value: 'people',
      action: 'Get all people',
    },
    {
      name: 'Get a person',
      value: 'person',
      action: 'Get a person',
    },
  ],
  default: 'people'
}

const pickID = {
  displayName: 'Project ID',
  description: '',
  name: 'project_id',
  type: 'number',
  required: true,
  default: 'queryParameter',
  
  displayOptions: {
    show: {
      resource: ['project'],
      operation: ['get_project'],
    }
  }
}

module.exports = { Basecamp }
