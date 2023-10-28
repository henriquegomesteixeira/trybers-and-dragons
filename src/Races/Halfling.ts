import Race from './Race';

// Classe que representa a raça halfling no universo de Trybers and Dragons - T&D.
export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _instanceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
  }

  static createdRacesInstances() {
    Halfling._instanceCount += 1;
    return Halfling._instanceCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}