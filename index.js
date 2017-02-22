var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var ParseDashboard = require('parse-dashboard');
var parseServerConfig = require('parse-server-azure-config');
var _ = require('underscore');
var url = require('url');
var favicon = require('serve-favicon');
var bodyParser  = require('body-parser');
var moment      = require('moment');

var config = parseServerConfig(__dirname);

var app = express();
app.use('/public', express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/parse', new ParseServer(config.server));
app.use('/parse-dashboard', ParseDashboard(config.dashboard, true));

Parse.initialize(config.server.appId, config.server.masterKey);
Parse.serverURL = config.server.serverURL;

// Basic Route
app.get('/', function(req, res) {
    res.send('Hello! Ionic Parse Server');
});

// API ROUTES ------------------

// get an instance of the router for api routes
var apiRoutes = express.Router();

apiRoutes.post('/testquery', function(req, res){
    var username = "agarwalswarit@gmail.com";
    var User = Parse.Object.extend("User");
    var query  = new Parse.Query(User);
    query.equalTo("username", username);
    query.first().then(function(usr) {
        if(usr) {
        	console.log(usr.id);
        	res.status(200).send(usr.id);
        } else {
            console.log(error);
        	res.status(404);
        }
    })
});

// apply the routes to application with the prefix /api
app.use('/api', apiRoutes);

// END OF API ROUTES -------------------

app.listen(process.env.PORT || url.parse(config.server.serverURL).port, function () {
  console.log('We Talk Shit Parse Server running at ${config.server.serverURL}');
});