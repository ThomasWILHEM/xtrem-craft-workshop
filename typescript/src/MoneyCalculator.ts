import { Currency } from './Currency'

export class MoneyCalculator {
  static add = (amount: number, currency: Currency, amountToAdd: number): number => amount + amountToAdd
  static times = (amount: number, currency: Currency, number: number): number => amount * number
  static divide = (amount: number, currency: Currency, value: number): number => amount / value
}
