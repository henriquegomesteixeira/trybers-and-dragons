import Archetype from './Archetypes';
import { EnergyType } from '../Energy';

// Arquetico da classe Mage
export default class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _instanceCount = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    Mage._instanceCount += 1;
    return Mage._instanceCount;
  }
}