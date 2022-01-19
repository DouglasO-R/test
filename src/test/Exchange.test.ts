import { ExchangeController } from "../controller/ExchangeController";
import { CurrencyFactory } from "../core/entities/CurrencyFactory";
import { Dolar } from "../core/entities/Dolar";
import { Real } from "../core/entities/Real";
import { Exchange } from "../core/useCases/Exchange";

describe('Exchange test', () => {

    test('UseCase Exchange', () => {
        const from = new Dolar();
        const to = new Real();
        const value = 5;
        const cotation = 5;

        const exchange = new Exchange(from, to, value, cotation);

        expect(exchange.execute()).toBe("R$25");
    });

    test("CurrencyController", () => {

        const params = {
            from:"USD",
            to:"BRL",
            value:5,
            cotation:5
        }

        const body = {}
        
        const exchangeController = ExchangeController.Exchange(params,body);

        expect(exchangeController).toBe("R$25");

    })
});