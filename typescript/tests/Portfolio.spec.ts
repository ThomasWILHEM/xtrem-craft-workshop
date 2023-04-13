import { Currency } from '../src/Currency'
import { Bank } from '../src/Bank'
import { Money } from '../src/Money'

class Portfolio {
  public moneys: Money[] = []

  add (money: Money): Portfolio {
    if (!this.moneys.some(x => x === money)) {
      this.moneys.push(money)
    }
    return aPortfolioWith(this.moneys)
  }

  evaluate (to: Currency, bank: Bank): number {
    return this.moneys.reduce((acc: number, cur: Money): number => {
      return acc + bank.convert(cur, to).amount
    }, 0)
  }
}

function aPortfolioWith (...moneys): Portfolio {
  const portfolio = new Portfolio()
  portfolio.moneys = moneys
  return portfolio
}

describe('Portfolio', function () {
  const bank = Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.2)

  test('5 USD + 10 EUR = 17 USD', () => {
    // Arange
    const portfolio = new Portfolio()
    const portfolio1 = portfolio.add(new Money(5, Currency.USD))
    const portfolio2 = portfolio1.add(new Money(10, Currency.EUR))

    // Act
    const result1 = portfolio1.evaluate(Currency.USD, bank)

    // Assert
    expect(result1).toBe(5)

    // Act
    const result2 = portfolio2.evaluate(Currency.USD, bank)

    // Assert
    expect(result2).toBe(17)
  })

  test('1 USD + 1100 KRW = 2200 KRW', () => {
    // Arange
    const bank = Bank.withExchangeRate(Currency.USD, Currency.KRW, 1100)
    const money1 = new Money(1, Currency.USD)
    const money2 = new Money(1100, Currency.KRW)
    const portfolio = aPortfolioWith(money1, money2)

    // Act
    const result = portfolio.evaluate(Currency.KRW, bank)

    // Assert
    expect(result).toBe(2200)
  })

  test('5 USD + 10 EUR = 18940 KRW', () => {
    // Arrange
    const bank = Bank.withExchangeRate(Currency.USD, Currency.KRW, 1100)
    bank.addExchangeRate(Currency.EUR, Currency.KRW, 1344)

    const money1 = new Money(5, Currency.USD)
    const money2 = new Money(10, Currency.EUR)
    const portfolio = aPortfolioWith(money1, money2)

    // Act
    const result = portfolio.evaluate(Currency.KRW, bank)

    // Assert
    expect(result).toBe(18940)
  })

  it('should be evaluated to 0 when empty', () => {
    const portfolio = new Portfolio()

    const result = portfolio.evaluate(Currency.USD, bank)

    expect(result).toBe(0)
  })

  it('', () => {
    const money = new Money(5, Currency.USD)
    // Arange
    const portfolio = aPortfolioWith(money)

    // Act
    const result = portfolio.evaluate(Currency.USD, bank)

    // Assert
    expect(result).toBe(5)
  })
})
