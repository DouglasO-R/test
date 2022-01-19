"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exchange = void 0;
class Exchange {
    constructor(from, to, value, cotation) {
        this.from = from;
        this.to = to;
        this.value = value;
        this.cotation = cotation;
    }
    execute() {
        return this.to.getSymbol() + this.value * this.cotation;
    }
}
exports.Exchange = Exchange;
