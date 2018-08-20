import React, { Component } from 'react';
import { tempData } from './settings/temp-data.js';
import ListActiveComponent from './utilities/lists/ListActiveComponent.js';
import Divider from './terminals/Divider.js';
import Box from './utilities/comps/Box.js';
import { toggleText } from './utilities/func/mix1.js';
import './App.css';




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      screens: [...tempData.screens],
    };
    this.handleToggleSidebar = this.handleToggleSidebar.bind(this);
    this.handleToggleSidebar = this.handleToggleSidebar.bind(this);
  }


  handleToggleSidebar(data, itemId) {
    console.log('---*****');
    const {screens} = this.state;
    screens[3].dividers[0].isOpen = !screens[3].dividers[0].isOpen;
    this.setState({ screens });
  }


  handleTogglePages(data, itemId) {
    console.log('---', data, itemId);
  }



  render() {
    return (
      <div className="Et1">
        {/*------------------------*/}
        {/*--- application root ---*/}
        {/*------------------------*/}
        <ListActiveComponent
          data={this.state.screens}
          Component={
            (screen)=> (
              <Box className={`screen ${screen.name}`}>
                {/*----------------------------*/}
                {/*--- Each view (or screen ---*/}
                {/*----------------------------*/}
                <p style={{ position:'absolute', top:0, left:0, background:'lime' }}>{screen.title}</p>
                {
                  screen.dividers && 
                  <ListActiveComponent
                    data={screen.dividers}
                    Component={
                      (divider)=> (
                        <React.Fragment>
                          {/*--------------------*/}
                          {/*--- Each divider ---*/}
                          {/*--------------------*/}
                          <Divider
                            parentName={screen.name}
                            sections={screen.sections ? [...screen.sections] : []}
                            {...divider}
                            toggleSidebar={this.handleToggleSidebar}
                            togglePages={this.handleTogglePages}
                            className={`screen ${screen.name} ${divider.name} ${toggleText(divider.isOpen, 'isOpen', '')}`}
                            // {...screen}
                          />
                          {/* <p>{item.name} - {divider.name}</p> */}
                        </React.Fragment>
                      )
                    }
                  />
                }
              </Box>
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
