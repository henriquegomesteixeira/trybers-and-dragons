import { SimpleFighter } from './Fighter';

// Classe de monstro
export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }
  
  attack(enemy: SimpleFighter): void {
    const damage = this.strength;
    enemy.receiveDamage(damage);
  }

  receiveDamage(attackPoints: number): number {
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints - attackPoints;
  }
}