"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Vampire_1 = require("./models/Vampire");
const Zombie_1 = require("./models/Zombie");
const app = express();
const myMonsters = {
    'Nosforatu': new Vampire_1.default('Nosforatu'),
    'Joe': new Zombie_1.default('Joe'),
};
app.get('/', function (req, res) {
    res.send('Hello, this is a test that the server is running.');
});
app.get('/roll-call', function (req, res) {
    const rollCall = [];
    for (let monster in myMonsters) {
        rollCall.push(myMonsters[monster].name);
    }
    res.send(rollCall.join(', '));
});
app.get('/:name', function (req, res) {
    let name = req.params.name;
    if (name in myMonsters) {
        res.send(name + ' is a valid Monster. Please submit an action.');
    }
    res.send(name + ' is not a valid Monster. Please try another name.');
});
app.get('/:name/feed?foodSource=:food&units=:x', function (req, res) {
    let name = req.params.name;
    let food = req.params.food;
    let units = req.params.x;
    if (name in myMonsters) {
        let monster = myMonsters[name];
        res.send(monster.name + ' ' + monster.foodSource);
        //
        // FIX
        // this prints ALL FOOD SORUCES.
    }
    res.send('Something went wrong. Please try again.');
});
app.listen('3000', function () {
    console.log('listening on 3000');
});
