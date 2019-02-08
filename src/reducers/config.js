import { Record, List } from 'immutable'

const appDefaults = {
  flights: new List()
}

export class AppIm extends Record(appDefaults) {}
