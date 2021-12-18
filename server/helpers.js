module.exports = {
  cleanUpPizza: (allPizzas) => {
    for (let pizza of allPizzas) {
      pizza.toppings.sort().join();
    }
    return allPizzas;
  },

  getToppingsCount: (cleanedPizzas) => {
    let toppingsCount = {};
    for (let pizza of cleanedPizzas) {
      if (toppingsCount[pizza.toppings[0]]) {
        toppingsCount[pizza.toppings[0]]++;
      } else {
        toppingsCount[pizza.toppings[0]] = 1;
      }
    }
    return toppingsCount;
  },

  getTop20: (toppingsObj) => {
    let toppingsArray = Object.entries(toppingsObj);
    let top20 = toppingsArray.sort((a, b) => b[1] - a[1]).slice(0, 20);
    for (let topping of top20) {
      topping[0] = topping[0][0].toUpperCase() + topping[0].slice(1);
    }
    return top20;
  }
};
