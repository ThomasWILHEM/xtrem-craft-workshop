import { Currency } from './Currency'

export class MoneyCalculator {
  static add = (amount: number, currency: Currency, amountToAdd: number): number => amount + amountToAdd
  static times = (amount: number, currency: Currency, multiplier: number): number => amount * multiplier
  static divide = (amount: number, currency: Currency, divider: number): number => amount / divider
}
