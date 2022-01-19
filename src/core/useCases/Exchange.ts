import { ICurrency } from "../entities/ICurrency";

export class Exchange {
    private from: ICurrency;
    private to: ICurrency;
    private value: number;
    private cotation: number;

    constructor(from: ICurrency, to: ICurrency, value: number, cotation: number) {
        this.from = from;
        this.to = to;
        this.value = value;
        this.cotation = cotation;
    }

    execute(): string {
        return this.to.getSymbol() + this.value * this.cotation;
    }
}