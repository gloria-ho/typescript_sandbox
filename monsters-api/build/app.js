"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Vampire_1 = require("./models/Vampire");
const app = express();
const myMonsters = {
    'Nosforatu': new Vampire_1.default('Nosforatu'),
};
app.get('/', function (req, res) {
    res.send('Hello, this is a test that the server is running.');
});
app.get('/roll-call', function (req, res) {
    const rollCall = [];
    for (let monster in myMonsters) {
        rollCall.push(myMonsters[monster].name);
    }
    res.send(rollCall.join(','));
});
app.listen('3000', function () {
    console.log('listening on 3000');
});
