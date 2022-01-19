import { CurrencyFactory } from "../core/entities/CurrencyFactory";
import { Exchange } from "../core/useCases/Exchange";

export class ExchangeController {

    static Exchange(params: any, body: any,) {
        try {
            const from = CurrencyFactory.getInstance(params.from);
            const to = CurrencyFactory.getInstance(params.to);

            const exchange = new Exchange(from, to, params.value, params.cotation);

            return exchange.execute();
        } catch (error) {
            console.log(error);
        }
    }
}