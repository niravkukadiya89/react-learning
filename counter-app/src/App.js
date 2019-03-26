import React, {
  Component
} from 'react';
import Counters from "./components/counters";
import './App.css';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    counters: [{
        id: 1,
        value: 4
      },
      {
        id: 2,
        value: 0
      },
      {
        id: 3,
        value: 0
      },
      {
        id: 4,
        value: 0
      }
    ]
  }

  handleIncrement = countera => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(countera);
    counters[index] = {
      ...countera
    };
    counters[index].value++;
    this.setState({
      counters
    });
  }

  handleDelete = CounterID => {
    //  console.log('Handle Delete event',CounterID);
    const counters = this.state.counters.filter(c => c.id !== CounterID);
    this.setState({
      counters
    });
  }

  restCounter = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState(counters);
  }
  render() {
    return ( 
    <React.Fragment >
      <Navbar/>
      <main className = "container" >
        <Counters 
        counters={this.state.counters}
        onDelete = {this.handleDelete}
        onIncrement = {this.handleIncrement}
        onReset = {this.restCounter}
        />
      </main> 
    </React.Fragment >
    );
  }
}

export default App;