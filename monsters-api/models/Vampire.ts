
import Monster from '../interfaces/Monster'

export default class Vampire implements Monster {
  name: string;
  // hunger= 100;
  // pintsConsumed = 0;
  // weaknesses = [Weakness.Fire1, Weakness.Stake1, Weakness.Sunlight1];

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