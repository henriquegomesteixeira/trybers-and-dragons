import Archetype from './Archetypes';
import { EnergyType } from '../Energy';

// Arquetico da classe Warrior
export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _instanceCount = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    Warrior._instanceCount += 1;
    return Warrior._instanceCount;
  }
}