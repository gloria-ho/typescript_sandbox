interface Monster {
  name: string;
  hunger: number;
  weaknesses: Weakness[]; // using enum defined below
  slay: (attack: Weakness) => string;
}

interface BloodSucker {
  pintsConsumed: number;
  suckBlood: (pints: number) => void;
}

class Vampire implements Monster, BloodSucker {
  name: string;
  hunger= 100;
  pintsConsumed = 0;
  weaknesses = [Weakness.Fire1, Weakness.Stake1, Weakness.Sunlight1];

  constructor(name: string) {
    this.name = name;
  }

  suckBlood(pints: number) {
    this.pintsConsumed += pints;
    this.hunger -= pints * 25;
  }

  slay(attack: Weakness) {
    if (this.weaknesses.includes(attack)) {
      return `${this.name} ${attack}`;
    } else {
    return `${this.name} has survived`;
    }
  }
}

interface BrainEater {
  brainsEaten: number;
  eatBrains: (brains: number) => string; 
  isMissingLimb?: boolean; // the ? makes this OPTIONAL
}

enum Weakness { // enum is a comma separate list
  Stake1 = 'is vulnerable to attacks from this pointed implement',
  Fire1 = 'is quite flamable',
  Sunlight1 = 'is burned by the light of day',
}

// type can be used
// at compile time, type get's removed from the code
// type OtherWeakness = 'stake' | 'fire' | 'sunlight';

class Zombie implements Monster, BrainEater {
  name: string;
  brainsEaten = 0;
  hunger = 50;
  weaknesses = [Weakness.Fire1, Weakness.Stake1];

  constructor(name:string) {
    this.name = name;
  }

  eatBrains(brains: number) {
    this.hunger -= brains * 5;
    this.brainsEaten += brains;
    return 'rrrgggghhhh';
  }

  slay(attack: Weakness) {
    if (this.weaknesses.includes(attack)) {
      return `${this.name} ${attack}`;
    } else {
    return `${this.name} has survived`;
    }
  }
}

const myNewVampire = new Vampire('Nosferatu');
console.log(myNewVampire.slay(Weakness.Sunlight1));