import { Currency } from './Currency'
import { WrongCurrencyException } from './WrongCurrencyException'
import { IncorrectDividerException } from './IncorrectDividerException'

export class Money {
  private readonly amount: number
  private readonly currency: Currency
  constructor (amount: number, currency: Currency) {
    this.amount = amount
    this.currency = currency
  }

  add (money: Money): Money {
    if (this.currency !== money.currency) {
      throw new WrongCurrencyException(this.currency, money.currency)
    }
    return new Money(this.amount + money.amount, this.currency)
  }

  times (number: number): Money {
    return new Money(this.amount * number, this.currency)
  }

  divide (number: number): Money {
    if (number <= 0) throw new IncorrectDividerException(number)

    return new Money(this.amount / number, this.currency)
  }
}
