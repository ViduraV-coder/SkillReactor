"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./src/app"));
const MongoDB_service_1 = require("./services/MongoDB.service");
const port = process.env.SERVER_PORT;
app_1.default.set('port', port);
const server = http_1.default.createServer(app_1.default);
server.listen(port);
(0, MongoDB_service_1.ConnectMongo)();
server.on('listening', function () {
});
module.exports = app_1.default;
//# sourceMappingURL=server.js.map