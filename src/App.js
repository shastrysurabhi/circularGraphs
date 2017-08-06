import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Circle from "./CircleComponent";
import Constants from "./Constants";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <p>REPORTS</p>
        </div>
       <Circle id="canvas1" percentage={Constants.DATA_FOR_REVENUE} color="blue"/>
       <Circle id="canvas2" percentage={Constants.DATA_FOR_HOURS_ESTIMATED} color="green"/>
       <Circle id="canvas3" percentage={Constants.DATA_FOR_JOBS_ESTIMATED} color="red"/>
      </div>
    );
  }
}

export default App;
