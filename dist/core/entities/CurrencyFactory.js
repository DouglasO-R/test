"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyFactory = void 0;
const Dolar_1 = require("./Dolar");
const Euro_1 = require("./Euro");
const Real_1 = require("./Real");
class CurrencyFactory {
    static getInstance(id) {
        switch (id) {
            case "USD":
                return new Dolar_1.Dolar;
            case "BRL":
                return new Real_1.Real;
            case "EUR":
                return new Euro_1.Euro;
            default:
                throw new Error("Invalid CUrrency");
        }
    }
}
exports.CurrencyFactory = CurrencyFactory;
