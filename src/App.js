import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { subscribeToTimer } from './services/sockets'

class App extends Component {

  state = {
    timeStamp: ""
  }

  componentDidMount() {

    subscribeToTimer((err, timeStamp) => {
      this.setState({
        timeStamp
      })
      console.log("TimeStamp", timeStamp)
    })

  }

  render() {
    return (
      <div className="App">
          <p>{this.state.timeStamp}</p>
      </div>
    );
  }
}

export default App;
