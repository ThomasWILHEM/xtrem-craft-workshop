import { Currency } from './Currency'

export class Money {
  private amount: number
  private readonly currency: Currency
  constructor (amount: number, currency: Currency) {
    this.amount = amount
    this.currency = currency
  }

  add (money: Money): Money {
    return new Money(this.amount + money.amount, this.currency)
  }
}
