const express = require('express');
const pizzas = require('./pizzas.js');
const { cleanUpPizza, getToppingsCount, getTop20 } = require('./helpers.js');
const db = require('./db/index.js');

const app = express();
app.use(express.static('public'));
app.use(express.json());

app.get('/pizzas', (req, res) => {
  let cleaned = cleanUpPizza(pizzas);
  let toppingsCount = getToppingsCount(cleaned);
  let top20 = getTop20(toppingsCount);
  db.save(top20)
    .then(() => {
      res.status(200).json(top20);
    })
    .catch(err => {
      console.error('Could not save pizzas to database', err);
      res.status(200).json(top20);
    });
});

app.listen('3000', () => {
  console.log('Server listening on port 3000');
});