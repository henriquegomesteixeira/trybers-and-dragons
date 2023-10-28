export type EnergyType = 'mana' | 'stamina';

// Interface que representa o atributo de energia para seres em Trybers and Dragons - T&D.
interface Energy {
  type_: EnergyType;
  amount: number;
}

export default Energy;