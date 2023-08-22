"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (_, res) => {
    res.status(200).send("Welcome to my app");
});
app.get('/app', (_, res) => {
    res.status(200).send("My first get endpoint");
});
exports.default = app;
//# sourceMappingURL=app.js.map