import Race from './Race';

// Classe que representa a raça Dwarf no universo de Trybers and Dragons - T&D.
export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _instanceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
  }

  static createdRacesInstances() {
    Dwarf._instanceCount += 1;
    return Dwarf._instanceCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}