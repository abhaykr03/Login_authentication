const http = require('http');
const app = require('./app');
// Getting port through environment variable {process.env} simply access the nodejs environment variable
const port = process.env.PORT || 3000;

// A listner func responsible for each new request and for it's response whenever made by user
const server = http.createServer(app);
server.listen(port);