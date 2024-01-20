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
      pickID,
    ],

    credentials: [{
      name: 'oAuth2Api',
      required: true
    }],
    
    version: 1,
    group: ['transform'],
    subtitle: '={{(await this.getCredentials("oAuth2Api")).oauthTokenData.access_token}}',
    inputs: ['main'],
    outputs: ['main']
  }

  async execute() {
    const baseUrl = "https://3.basecampapi.com"
    const baseID = 5278257
    const operation = this.getNodeParameter('operation', 0)
    
    const uri = `${baseUrl}/${baseID}/${operation}.json`

    const baseOptions = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      resolveWithFullResponse: true,
      json: true
    }

    const response = await this.helpers.requestWithAuthentication.call(this, 'oAuth2Api', {
      uri,
      ...baseOptions
    })

    let lastResponse = response
    let data = response.body

    for(let i = 0; i < 10; i++) {
      if (lastResponse.headers.link) {
        const link = lastResponse.headers.link.split(';')[0].replace('<', '').replace('>', '')
        const newData = await this.helpers.requestWithAuthentication.call(this, 'oAuth2Api', {
          uri: link,
          ...baseOptions
        })
        data = data.concat(newData.body)
        lastResponse = newData
      } else {
        break
      }
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
