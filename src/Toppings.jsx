import React from 'react';
import ToppingEntry from './ToppingEntry.jsx';

const Toppings = ({toppings}) => (
  <table>
    <thead>
      <tr>
        <th>Rank</th>
        <th>Toppings</th>
        <th>Number of Orders</th>
      </tr>
    </thead>
    <tbody>
      {toppings.map((topping, i) => (
        <ToppingEntry topping={topping} index={i} key={topping[0]} />
      ))}
    </tbody>
  </table>
);

export default Toppings;