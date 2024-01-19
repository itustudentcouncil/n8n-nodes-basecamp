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
    subtitle: '={{$parameter["operation"]}}',
    inputs: ['main'],
    outputs: ['main'],
    
    requestDefaults: {
      baseURL: 'https://3.basecampapi.com/',
      url: '',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  }
}

const pickResource = {
  displayName: 'Recording Type',
  name: 'resource',
  
  noDataExpression: true,
  
  type: 'options',
  default: 'project',
  options: [{
    name: 'Project',
    value: 'project'
  }]
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
      value: 'get_projects',
      action: 'Get all projects',
      routing: {
        request: {
          method: 'GET',
          url: '/projects.json',
        },
      },
    },
    {
      name: 'Get a project',
      value: 'get_project',
      action: 'Get a project',
      routing: {
        request: {
          method: 'GET',
          url: '/projects/{{project_id}}.json',
        },
      },
    },
  ],
  default: 'get_projects'
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
