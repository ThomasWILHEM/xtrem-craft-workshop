import { Currency } from './Currency'

export class ImpossibleMultiplierException extends Error {
  constructor (multiplier: number) {
    super('Multiplier: ' + multiplier.toString())
  }
}
