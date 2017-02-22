/*module.exports = {
  server: {},
  dashboard: {},
  storage: {},
  push: {}
}*/

module.exports = {
	server: {
		databaseURI: 'mongodb://wetalkshitdb-parse:PdcYWcGDTxSpFcp1r05queO5jOc0TSP7181H0jkUh7lfAPUl9cEr8Nzgn6CXbMNfjpF2H7HrauJcTDp5AAGtpg==@wetalkshitdb-parse.documents.azure.com:10250/parse?ssl=true'
		cloud: '/Users/swaritkagarwal/Documents/DEV/ionic-parse-server/cloud/main.js', 
		appId: 'f08de79a-5169-4a28-ac53-6a6b14cd723c',
		masterKey: 'a0c2d6b6-3bc1-4ca1-b4e0-fc866f42f604',
		serverURL: 'http://localhost:1337/parse'
	},
	dashboard: { 
		apps: [ { 
			appId: 'f08de79a-5169-4a28-ac53-6a6b14cd723c',
          	serverURL: 'http://localhost:1337/parse',
          	masterKey: 'a0c2d6b6-3bc1-4ca1-b4e0-fc866f42f604',
          	appName: 'ionicparseserver' 
        } ],
     	users: [ {
     		user: 'f08de79a-5169-4a28-ac53-6a6b14cd723c',
     		pass: 'a0c2d6b6-3bc1-4ca1-b4e0-fc866f42f604'
     	}]
    },    
	storage: {},
	push: {}
}