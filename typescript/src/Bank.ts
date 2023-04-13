import { Currency } from './Currency'
import { MissingExchangeRateError } from './MissingExchangeRateError'
import { Money } from './Money'

export class Bank {
  private readonly _exchangeRates: Map<string, number> = new Map()

  static withExchangeRate (currency1: Currency, currency2: Currency, rate: number): Bank {
    const bank = new Bank()
    bank.addExchangeRate(currency1, currency2, rate)
    return bank
  }

  addExchangeRate (currency1: Currency, currency2: Currency, rate: number): void {
    this._exchangeRates.set(currency1 + '->' + currency2, rate)
  }

  convert (money: Money, to: Currency) {
    if (!(money.currency === to || this._exchangeRates.has(money.currency + '->' + to))) {
      throw new MissingExchangeRateError(money.currency, to)
    }

    return money.currency === to
      ? new Money(money.amount, to)
      : new Money(money.amount * this._exchangeRates.get(money.currency + '->' + to), to)
  }
}
