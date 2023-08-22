import http from 'http';
import App from './src/app';
import { ConnectMongo } from './services/MongoDB.service';

const port = process.env.SERVER_PORT;

App.set('port', port);
const server = http.createServer(App);
server.listen(port);

// ConnectMongo();

server.on('listening', function(): void {
 });

module.exports = App;
