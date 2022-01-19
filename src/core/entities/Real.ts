import { ICurrency } from "./ICurrency";

export class Real implements ICurrency {

    getId(): string {
        return "BRL";
    }

    getSymbol(): string {
        return "R$";
    }

}