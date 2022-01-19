"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Express_1 = __importDefault(require("../../adapter/Express"));
const ExchangeController_1 = require("../../controller/ExchangeController");
const app = (0, express_1.default)();
app.get('/api', Express_1.default.exchange(ExchangeController_1.ExchangeController.Exchange));
app.get('/', (req, res, next) => {
    const { from, to, value, coation } = req.query;
    res.status(200).send({ from, to, value, coation });
});
app.listen(3000, () => console.log('api started'));
