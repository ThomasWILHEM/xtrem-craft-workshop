import { Currency } from '../src/Currency'
import { Bank } from '../src/Bank'
import {Money} from "../src/Money";

class Portfolio {
  private moneys: Money[] = [];

  add (money: Money): void {
    this.moneys.push(money)
  }

  evaluate (to: Currency, bank: Bank): number {
    return this.moneys.reduce((acc: number, cur: Money): number => {
      return acc + bank.convert(cur, to).amount
    }, 0)
  }
}

function aPortfolioWith(...moneys) {
  const portfolio = new Portfolio()
  moneys.forEach((money) => {
    portfolio.add(money)
  })
  return portfolio;
}

describe('Portfolio', function () {
  const bank = Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.2)

  test('5 USD + 10 EUR = 17 USD', () => {
    // Arange
    const portfolio = new Portfolio()
    portfolio.add(new Money(5, Currency.USD))
    portfolio.add(new Money(10, Currency.EUR))

    // Act
    const result = portfolio.evaluate(Currency.USD, bank)

    // Assert
    expect(result).toBe(17)
  })

  test('1 USD + 1100 KRW = 2200 KRW', () => {
    // Arange
    const bank = Bank.withExchangeRate(Currency.USD, Currency.KRW, 1100)
    let money1 = new Money(1, Currency.USD)
    let money2 = new Money(1100, Currency.KRW)
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

    let money1 = new Money(5, Currency.USD);
    let money2 = new Money(10, Currency.EUR);
    const portfolio = aPortfolioWith(money1, money2);

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
    let money = new Money(5, Currency.USD)
    // Arange
    const portfolio = aPortfolioWith(money)

    // Act
    const result = portfolio.evaluate(Currency.USD, bank)

    // Assert
    expect(result).toBe(5)
  })
})
