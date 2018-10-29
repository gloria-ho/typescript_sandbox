
import Monster from '../interfaces/Monster'
import {Food, Weakness} from '../interfaces/enums'

export default class Vampire implements Monster {
  name: string;
  // hunger= 100;
  // pintsConsumed = 0;
  weaknesses = [Weakness.Fire, Weakness.Stake, Weakness.Sunlight];
  foodSource = [Food.Blood];
  
  constructor(name: string) {
    this.name = name;
  }

  // suckBlood(pints: number) {
  //   this.pintsConsumed += pints;
  //   this.hunger -= pints * 25;
  // }

  // slay(attack: Weakness) {
  //   if (this.weaknesses.includes(attack)) {
  //     return `${this.name} ${attack}`;
  //   } else {
  //   return `${this.name} has survived`;
  //   }
  // }
}