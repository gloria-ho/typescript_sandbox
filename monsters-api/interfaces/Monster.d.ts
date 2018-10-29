import {Food, Weakness} from './enums';

export default interface Monster {
  name: string;
  // hunger: number;
  weaknesses: Weakness[];
  // slay: (attack: Weakness) => string;
  foodSource: Food[];
}