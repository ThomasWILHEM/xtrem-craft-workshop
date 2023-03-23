import { Currency } from './Currency'

export class WrongCurrencyException extends Error {
  constructor (currency1: Currency, currency2: Currency) {
    super(currency1 + ' != ' + currency2)
  }
}
