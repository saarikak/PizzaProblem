import React from 'react';

const ToppingEntry = ({topping, index}) => (
  <tr>
    <td>{index + 1}</td>
    <td>{topping[0]}</td>
    <td>{topping[1]}</td>
  </tr>
);

export default ToppingEntry;