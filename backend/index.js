// Node todo list backend main entry point
const express     = require('express'),
      		mongoose    = require('mongoose'),
      		morgan 			= require('morgan'),
      		bodyParser  = require('body-parser'),
      		database = require('.api/routes/config.js'),
      		routeBree      = require('./api/router/bree.route.js'),
      		path        = require('path'),
      		app         = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

mongoose.connect(database.database,function(err,bree){
	if(err){
		console.log(err);
		process.exit(1); // se detiene el proceso
	}
	const server = app.listen(process.env.PORT || 8000, function (){ // levantar el servidor, localhost
	const port = server.address().port; // en que puerto está corriendo
		console.log('running on port:',port);
	});
});

app.use('/api/v1',breeRoute);
