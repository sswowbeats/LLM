{
  "eula": "",
  "vendor": "Danish",
  "license": "",
  "id": "com.danish.sap.sac.chatgpt",
  "version": "1.0.0",
  "name": "chatGPT SAC",
  "newInstancePrefix": "chatGPTInSAC",
  "description": "A custom widget to integrate chatGPT3 in SAC Analytic application",
  "webcomponents": [
    {
      "kind": "main",
      "tag": "custom-widget",
      "url": "https://dmeraj.github.io/integrating-chatGPT3-in-SAC/main.js",
      "integrity": "",
      "ignoreIntegrity": true
    }
  ],
  "properties": {
		"width": {
			"type": "integer",
			"default": 1
		},
		"height": {
			"type": "integer",
			"default": 1
		}
  },
  "methods": {
		"post": {
			"description": "Wrapper for jQuery post",
			"parameters": [
				{
					"name": "APIKey",
					"type": "string",
					"description": ""
				},
				{
					"name": "endPoint",
					"type": "string",
					"description": ""
				},
				{
					"name": "prompt",
					"type": "string",
					"description": ""
				}
			],
			"returnType": "string"
		}
  },
  "events": {
  }
}