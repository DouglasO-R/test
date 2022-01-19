"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeController = void 0;
const CurrencyFactory_1 = require("../core/entities/CurrencyFactory");
const Exchange_1 = require("../core/useCases/Exchange");
class ExchangeController {
    static Exchange(params, body) {
        try {
            const from = CurrencyFactory_1.CurrencyFactory.getInstance(params.from);
            const to = CurrencyFactory_1.CurrencyFactory.getInstance(params.to);
            const exchange = new Exchange_1.Exchange(from, to, params.value, params.cotation);
            return exchange.execute();
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.ExchangeController = ExchangeController;
