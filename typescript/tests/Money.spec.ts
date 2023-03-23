import { Currency } from '../src/Currency'
import { Money } from '../src/Money'

describe('Money', function () {
  test('exactement', () => {
    const money: Money = new Money(10, Currency.EUR)
    const addition = money.add(new Money(2, Currency.EUR))

    expect(money).toEqual(new Money(10, Currency.EUR))
    expect(addition).toEqual(new Money(12, Currency.EUR))
  })
})
