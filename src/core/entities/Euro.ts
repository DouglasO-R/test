import { ICurrency } from "./ICurrency";

export class Euro implements ICurrency{

    getId(): string {
        return "EUR";
    }
    getSymbol(): string {
        return "€";
    }

}