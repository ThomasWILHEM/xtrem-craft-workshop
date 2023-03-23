import { Currency } from '../src/Currency'
import { Money } from '../src/Money'
import { WrongCurrencyException } from '../src/WrongCurrencyException'
import { IncorrectDividerException } from '../src/IncorrectDividerException'

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

  test('Times Money', () => {
    const money: Money = new Money(10, Currency.EUR)
    const multiplication = money.times(5)

    expect(money).toEqual(new Money(10, Currency.EUR))
    expect(multiplication).toEqual(new Money(50, Currency.EUR))
  })

  test('Divide money', () => {
    const money: Money = new Money(10, Currency.EUR)
    const multiplication = money.divide(2)

    expect(money).toEqual(new Money(10, Currency.EUR))
    expect(multiplication).toEqual(new Money(5, Currency.EUR))
  })

  test('divider negative or 0', () => {
    const money: Money = new Money(10, Currency.EUR)

    expect(() => money.divide(0)).toThrow(IncorrectDividerException).toThrow('0 <= 0')
    expect(() => money.divide(-6)).toThrow(IncorrectDividerException).toThrow('-6 <= 0')
  })
})
