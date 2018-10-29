import * as express from 'express';

// models, interfaces, & enums
import Monster from './interfaces/Monster';
import Vampire from './models/Vampire';
import Zombie from './models/Zombie';
import {Food} from './interfaces/enums';
import {Attack} from './interfaces/enums';
import {Weakness} from './interfaces/enums';

const app = express();

const myMonsters = {
  'Nosforatu': new Vampire('Nosforatu'),
  'Joe': new Zombie('Joe'),
}

app.get('/', function(req, res){
  res.send('Hello, this is a test that the server is running.');
});

app.get('/roll-call', function(req, res){
  const rollCall = [];
  for (let monster in myMonsters) {
    rollCall.push((myMonsters[monster] as Monster).name);
  }
  res.send(rollCall.join(', '));
});

app.get('/:name', function(req, res){
  let name = req.params.name;
  if (name in myMonsters) {
    res.send(name + ' is a valid Monster. Please submit an action.');
  }
  res.send(name + ' is not a valid Monster. Please try another name.')
});

app.get('/:name/feed?foodSource=:food&units=:x', function(req, res){
  let name = req.params.name;
  let food = req.params.food;
  let units = req.params.x;
  res.send(name + ', ' +  food + ', ' + units);
});

app.listen('3000', function(){
  console.log('listening on 3000');
});