import { Currency } from '../src/Currency'
import { MoneyCalculator } from '../src/MoneyCalculator'

describe('Money', function () {
  test('add in usd returns number', () => {
    expect(MoneyCalculator.add(5, Currency.USD, 10)).toBeNumber()
    expect(4006).toBe(MoneyCalculator.add(4002, Currency.KRW, 4))
    expect(MoneyCalculator.add(5, Currency.USD, 10)).not.toBeNull()
  })

  test('multiply in eur returns positive number', () => {
    expect(MoneyCalculator.times(10, Currency.EUR, 2)).toBeGreaterThan(0)
    expect(4004).toBe(MoneyCalculator.times(2002, Currency.KRW, 2))
  })

  test('divide in korean won returns number', () => {
    expect(1000.5).toBe(MoneyCalculator.divide(4002, Currency.KRW, 4))
  })
})
