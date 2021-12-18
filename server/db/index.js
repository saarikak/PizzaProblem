const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/pizzas')
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.error('Could not connect to database', err);
  });

mongoose.set('debug', true);

const PizzaSchema = new mongoose.Schema({
  toppings: {
    type: String,
    unique: true
  },
  count: Number
});

const Pizza = mongoose.model('Pizza', PizzaSchema);

module.exports.save = (pizzas) => {
  let pizzasArray = pizzas.map((pizza) => {
    let pizzaObj = {
      toppings: pizza[0],
      count: pizza[1]
    };
    return pizzaObj;
  });
  return Pizza.create(pizzasArray);
};