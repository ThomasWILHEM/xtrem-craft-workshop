import { Currency } from './Currency'
import {WrongCurrencyException} from "./WrongCurrencyException";

export class Money {
  private amount: number
  private readonly currency: Currency
  constructor (amount: number, currency: Currency) {
    this.amount = amount
    this.currency = currency
  }

  add (money: Money): Money {
    if(this.currency !== money.currency){
      throw new WrongCurrencyException(this.currency, money.currency)
    }
    return new Money(this.amount + money.amount, this.currency)
  }
}
