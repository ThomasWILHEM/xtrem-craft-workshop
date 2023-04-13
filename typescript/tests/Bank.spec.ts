import {Currency} from '../src/Currency'
import {Bank} from '../src/Bank'
import {MissingExchangeRateError} from '../src/MissingExchangeRateError'
import {BankBuilder} from "./BankBuilder";

const aBank = () => BankBuilder.aBank();

describe('Bank', function () {
  let bank = null
  beforeEach(() => {
    bank = aBank()
        .withPivotCurrency(Currency.EUR)
        .withExchangeRate(Currency.USD, 1.2).build()
    bank = Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.2)
  })

  test('convert from eur to usd returns number', () => {
    const conversion = bank.convert(10, Currency.EUR, Currency.USD)
    expect(conversion).toBe(12)
  })

  test('convert from usd to usd returns same value', () => {
    const conversion = bank.convert(10, Currency.EUR, Currency.EUR)
    expect(conversion).toBe(10)
  })

  test('convert throws error in case of missing exchange rates', () => {
    expect(() => bank.convert(10, Currency.EUR, Currency.KRW)).toThrow(MissingExchangeRateError).toThrow('EUR -> KRW')
  })

  test('convert with different exchange rates returns different numbers', () => {
    const initialConversion = bank.convert(10, Currency.EUR, Currency.USD)
    bank.addExchangeRate(Currency.EUR, Currency.USD, 1.3)
    const actual = bank.convert(10, Currency.EUR, Currency.USD)
    expect(actual).not.toBe(initialConversion)
  })
})
