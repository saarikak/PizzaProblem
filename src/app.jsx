import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Toppings from './Toppings.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pizzas: []
    };
  }

  componentDidMount() {
    axios.get('/pizzas')
      .then((results) => {
        this.setState({pizzas: results.data});
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <h2>Top 20 Toppings</h2>
        <Toppings toppings={this.state.pizzas}/>
      </div>
    );
  }
}



ReactDOM.render(<App />, document.getElementById('app'));