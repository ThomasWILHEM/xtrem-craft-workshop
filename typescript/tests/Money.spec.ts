import { Currency } from '../src/Currency'
import { Money } from '../src/Money'
import {WrongCurrencyException} from "../src/WrongCurrencyException";

describe('Money', function () {
  test('Add Money with the good currency', () => {
    const money: Money = new Money(10, Currency.EUR)
    const addition = money.add(new Money(2, Currency.EUR))

    expect(money).toEqual(new Money(10, Currency.EUR))
    expect(addition).toEqual(new Money(12, Currency.EUR))
  })

  test('Add Money with the wrong currency', () => {
    const money: Money = new Money(10, Currency.EUR)
    expect(() => money.add(new Money(2, Currency.USD))).toThrow(WrongCurrencyException).toThrow('EUR != USD')
  })
})
