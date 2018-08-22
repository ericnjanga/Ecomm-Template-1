import React, { Component } from 'react';
import { tempData } from './settings/temp-data.js';
import ListActiveComponent from './utilities/lists/ListActiveComponent.js';
import Divider from './terminals/Divider.js';
import Box from './utilities/comps/Box.js';
import { toggleText, toggleCollectionProperty } from './utilities/func/mix1.js';
import './App.css';

import { database } from './settings/basics.js';




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      screens: [...tempData.screens],
    };
    this.handleToggleSidebar = this.handleToggleSidebar.bind(this);
    this.handleAdminPageToggle = this.handleAdminPageToggle.bind(this);
    this.handleAdminDataSubmit = this.handleAdminDataSubmit.bind(this);
  }


  componentDidMount() {

    //syncWithDatabase
    
  }


  handleToggleSidebar(data, itemId) {
    console.log('---*****');
    const {screens} = this.state;
    screens[3].dividers[0].isOpen = !screens[3].dividers[0].isOpen;
    this.setState({ screens });
  }


  handleAdminDataSubmit({ event, nodeRoot, nodeDir1, isSingleRecord }) {

    // console.log('--onsubmit=', nodeRoot, nodeDir1, isSingleRecord );


    // const nodeRoot = 'items';


    const listRef = database.ref(`${nodeRoot}/${nodeDir1}/`);
    const record = { ...event.formData };
    let updates = {};
    let recordId = '';
    record.createdOn = Date.now();

    const promiseDataSubmit = new Promise((resolve) => {

      if(!isSingleRecord) {
        if (!record.id) { 
          // Get a key for a new Post.
          recordId = listRef.push().key; 
          // save record "key" as "id"
          record.id = recordId;
        } 
        updates[`${recordId}`] = record;
      } else {
        updates = record; 
      }

      //...
      // updates[`/${recordId}`] = record; 
      // console.log('....', updates);
      listRef.update(updates);
      resolve('done;')

    });// [end] promise
    
    promiseDataSubmit.then((data)=> {
      console.log('resolved---', data)
    }); 
      

    // return new Promise((resolve) => { 
      // if (!record.id) { 
      //   // Get a key for a new Post.
      //   record.id = listRef.push().key; 
      // } 
      // updates[`/${record.id}`] = record; 
      // resolve(record); 
      // return listRef.update(updates);
    // });// [end] promise




  } //...


  
  
  /**
   * Toggle 'active' property of state page collections
   * - Will toggle active property of "page" or "subpage" collection
   * - In case of a subpage, use 
   *
   * @collection: collection that will be mapped
   * @collTargetId: string identifying the item we will activate
   * @subpageIndex: index at which the collection will be replaced in the parent collection (before being replaced in the state)
  */
  handleAdminPageToggle(collection, collTargetId, subpageIndex) {
    let sections = '';
    const {screens} = this.state;
    if (typeof subpageIndex !== 'number' && !subpageIndex) {
      sections = toggleCollectionProperty ({
        arrCollection: collection, 
        targetId: collTargetId, 
        itemIdProp: 'name',
        itemProp: 'active', 
        itemVal: true, 
        itemOppVal: false,
      });
    } else {
      const subsections = toggleCollectionProperty ({
        arrCollection: collection, 
        targetId: collTargetId, 
        itemIdProp: 'name',
        itemProp: 'active', 
        itemVal: true, 
        itemOppVal: false,
      });
      sections = this.state.screens[3].sections;
      console.log('...sections=', sections, sections[subpageIndex], subpageIndex);
      sections[subpageIndex].items = subsections;   
    }
    screens[3].sections = sections;
    this.setState({ screens });
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
                            togglePages={this.handleAdminPageToggle}
                            adminDataSubmit={this.handleAdminDataSubmit}
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
