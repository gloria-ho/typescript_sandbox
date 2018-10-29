"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../interfaces/enums");
class Vampire {
    constructor(name) {
        // hunger= 100;
        // pintsConsumed = 0;
        this.weaknesses = [enums_1.Weakness.Fire, enums_1.Weakness.Stake, enums_1.Weakness.Sunlight];
        this.foodSource = [enums_1.Food.Blood];
        this.name = name;
    }
}
exports.default = Vampire;
