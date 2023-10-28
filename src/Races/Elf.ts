import Race from './Race';

// Classe que representa a raça Elf no universo de Trybers and Dragons - T&D.
export default class Elf extends Race {
  private _maxLifePoints: number;
  private static _instanceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
  }
  
  static createdRacesInstances() {
    Elf._instanceCount += 1;
    return Elf._instanceCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}