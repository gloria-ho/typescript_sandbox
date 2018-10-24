import * as express from 'express';

// Models
import Monster from './interfaces/Monster';
import Vampire from './models/Vampire';

const app = express();

const myMonsters = {
  'Nosforatu': new Vampire('Nosforatu'),
}

app.get('/', function(req, res) {
  res.send('Hello');
});

app.get('/roll-call', function(req, res){
  const rollCall = [];
  for (let monster in myMonsters) {
    rollCall.push((myMonsters[monster] as Monster).name);
  }
  res.send(rollCall.join(','));
});

app.listen('3000', function(){
  console.log('listening on 3000');
});