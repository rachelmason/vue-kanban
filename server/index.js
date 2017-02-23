import server from './config/dev-server'






let mongoose = require('mongoose')
mongoose.Promise = global.Promise;
let connection = mongoose.connection;



// ENABLE ROUTES IF USING SERVER SIDE ROUTING








// Establishes MongoDb Connection
mongoose.connect(process.env.CONNECTIONSTRING, {
	server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
	replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
});

connection.on('error', console.error.bind(console, 'connection error:'));

connection.once('open', function () {
	server.listen(process.env.PORT, function () {
		console.log(`Running on port: ${process.env.PORT}`);
	})
});

// server.use(boardRoutes)