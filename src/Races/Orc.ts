import Race from './Race';

// Classe que representa a raça orc no universo de Trybers and Dragons - T&D.
export default class Orc extends Race {
  private _maxLifePoints: number;
  private static _instanceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
  }

  static createdRacesInstances() {
    Orc._instanceCount += 1;
    return Orc._instanceCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}