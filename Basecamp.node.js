class Basecamp {
	description = {
		displayName: 'Basecamp',
		description: 'Interact with the Basecamp API',
		name: 'basecamp',
		icon: 'file:basecamp.png',
		defaults: {
			name: 'Basecamp',
		},
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
		},
		
		properties: [
			pickResource,
			pickAction,
			pickID,
		],
	}
}

const prop = (args) => args

const pickResource = prop({
	displayName: 'Recording Type',
	name: 'resource',
	
	noDataExpression: true,
	
	type: 'options',
	default: 'project',
	options: [{
		name: 'Project',
		value: 'project'
	}],
})

const pickAction = prop({
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
})

const pickID = prop({
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
})

module.exports = { Basecamp }
