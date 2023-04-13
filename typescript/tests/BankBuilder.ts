import {Currency} from "../src/Currency";
import {Bank} from "../src/Bank";

export class BankBuilder {
    static aBank = (): BankBuilder => new BankBuilder()
    private pivotCurrency: Currency
    private exchangeRates: Map<Currency, number> = new Map<Currency, number>([[Currency.USD, 1.2]])

    withPivotCurrency(currency: Currency): BankBuilder {
        this.pivotCurrency = currency
        return this
    }

    withExchangeRate(to: Currency, rate: number): BankBuilder {
        this.exchangeRates.set(to, rate)
        return this
    }

    build(): Bank {
        const bank = new Bank()
        this.exchangeRates.forEach((rate: number, currency: Currency) => {
            bank.addExchangeRate(this.pivotCurrency, currency, rate)
            bank.addExchangeRate(currency, this.pivotCurrency, 1 / rate)
        })
        return bank
    }
}