import { Dolar } from "./Dolar";
import { Euro } from "./Euro";
import { Real } from "./Real";

export class CurrencyFactory {

    static getInstance(id: string) {
        switch (id) {
            case "USD":
                return new Dolar;

            case "BRL":
                return new Real;

            case "EUR":
                return new Euro;

            default:
                throw new Error("Invalid CUrrency");

        }
    }
}