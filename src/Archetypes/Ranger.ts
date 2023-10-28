import Archetype from './Archetypes';
import { EnergyType } from '../Energy';

// Arquetico da classe Ranger
export default class Ranger extends Archetype {
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
    Ranger._instanceCount += 1;
    return Ranger._instanceCount;
  }
}