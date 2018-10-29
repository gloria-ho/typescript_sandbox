"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../interfaces/enums");
class Zombie {
    constructor(name) {
        // brainsEaten = 0;
        // hunger = 50;
        this.weaknesses = [enums_1.Weakness.Fire, enums_1.Weakness.Stake];
        this.foodSource = [enums_1.Food.Brains, enums_1.Food.Flesh];
        this.name = name;
    }
}
exports.default = Zombie;
