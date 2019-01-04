import React, {Component} from 'react';

export default class CounterApp extends Component {
    constructor(props) {
      super(props);
      this.state = {
          counter: 0
      };
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);
    }
    increment() {
        this.setState((prevState) => {
            return {counter: prevState.counter + 1}
        });
    }
    decrement() {
      this.setState((prevState) => {
          return { counter: prevState.counter - 1 }
      });
    }
    reset() {
      this.setState(() => {
          return { counter: 0 }
      });
    }
    render() {
        return (
            <div>
                <h1>Counter: {this.state.counter}</h1>
           <button onClick={this.increment}>+1</button>
         <button onClick={this.decrement}>-1</button>
          <button onClick={this.reset}>reset</button>
            </div>
        );
    }
  }