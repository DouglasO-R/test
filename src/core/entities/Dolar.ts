import { ICurrency } from "./ICurrency";

export class Dolar implements ICurrency{

    getId(): string {
        return "USD";
    }
    
    getSymbol(): string {
        return "$";
    }

}