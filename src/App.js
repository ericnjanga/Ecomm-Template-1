import React, { Component } from 'react';
import { tempData } from './settings/temp-data.js';
import ListActiveComponent from './utilities/lists/ListActiveComponent.js';
import { withActiveProp } from './utilities/hoc/withActiveProp.js';
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
        <ListActiveComponent
          data={this.state.screens}
          Component={
            (item)=> (
              <div className="screen">
                <p>{item.title}</p>
              </div>
            )
          }
        />
        

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
