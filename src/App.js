import React, { Component } from 'react';
import { tempData } from './settings/temp-data.js';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      screens: [...tempData.screens],
    };
  }


  render() {
    return (
      <div className="App">
        {
          this.state.screens.map(screen => {
            return (
              <div className="screen">
                <p>screen 1</p>
              </div>
            )
          })
        }

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
