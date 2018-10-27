
import Monster from '../interfaces/Monster'

export default class Zombie implements Monster {
  name: string;
  // brainsEaten = 0;
  // hunger = 50;
  // weaknesses = [Weakness.Fire1, Weakness.Stake1];

  constructor(name:string) {
    this.name = name;
  }

  // eatBrains(brains: number) {
  //   this.hunger -= brains * 5;
  //   this.brainsEaten += brains;
  //   return 'rrrgggghhhh';
  // }

  // slay(attack: Weakness) {
  //   if (this.weaknesses.includes(attack)) {
  //     return `${this.name} ${attack}`;
  //   } else {
  //   return `${this.name} has survived`;
  //   }
  // }
}
