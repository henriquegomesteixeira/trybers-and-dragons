import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import randomNumber from './utils';

// Características do personagem
class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(private _name: string) {
    this._dexterity = randomNumber(1, 10);
    this._race = new Elf(_name, this._dexterity);
    this._archetype = new Mage(_name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = randomNumber(1, 10);
    this._defense = randomNumber(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: randomNumber(1, 10),
    };
    this._lifePoints = this._maxLifePoints;
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    if (damage > 0) this._lifePoints -= damage;
    else this._lifePoints -= 1;

    if (this._lifePoints <= 0) this._lifePoints = -1;

    return this._lifePoints;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    const damage = this._strength;
    enemy.receiveDamage(damage);
  }

  levelUp() {
    this._maxLifePoints += randomNumber(1, 10);
    this._strength += randomNumber(1, 10);
    this._defense += randomNumber(1, 10);
    this._dexterity += randomNumber(1, 10);
    this._energy.amount = 10;
    
    if (this._maxLifePoints > this.race.maxLifePoints) { 
      this._maxLifePoints = this.race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter): void {
    const damage = this._strength * 2;
    enemy.receiveDamage(damage);
  }
}

export default Character;