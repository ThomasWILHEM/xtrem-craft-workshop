import { Currency } from './Currency'

export class IncorrectDividerException extends Error {
  constructor (divider: number) {
    super(divider.toString() + ' <= 0')
  }
}
