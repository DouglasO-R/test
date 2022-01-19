"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExchangeController_1 = require("../controller/ExchangeController");
const Dolar_1 = require("../core/entities/Dolar");
const Real_1 = require("../core/entities/Real");
const Exchange_1 = require("../core/useCases/Exchange");
describe('Exchange test', () => {
    test('UseCase Exchange', () => {
        const from = new Dolar_1.Dolar();
        const to = new Real_1.Real();
        const value = 5;
        const cotation = 5;
        const exchange = new Exchange_1.Exchange(from, to, value, cotation);
        expect(exchange.execute()).toBe("R$25");
    });
    test("CurrencyController", () => {
        const params = {
            from: "USD",
            to: "BRL",
            value: 5,
            cotation: 5
        };
        const body = {};
        const exchangeController = ExchangeController_1.ExchangeController.Exchange(params, body);
        expect(exchangeController).toBe("R$25");
    });
});
