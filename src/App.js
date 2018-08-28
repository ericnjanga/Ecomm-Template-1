import React, { Component } from 'react';
import { dbGetNode, dbGetSnapshotData, dbSaveRecord } from './utilities/func/mix1.js';
import { tempData } from './settings/temp-data.js';
import TopNavigation from './terminals/TopNavigation.js';
import { resetStateForms } from './terminals/func.js';
import PreviewBox from './terminals/widgets/PreviewBox.js';
import ListActiveComponent from './utilities/lists/ListActiveComponent.js';
import Divider from './terminals/Divider.js';
import Box from './utilities/comps/Box.js';
import { toggleText, toggleCollectionProperty } from './utilities/func/mix1.js';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      screens: [...tempData.screens],
    };
    this.handleToggleSidebar = this.handleToggleSidebar.bind(this);
    this.handleAdminPageToggle = this.handleAdminPageToggle.bind(this);
    this.handleUserLogin = this.handleUserLogin.bind(this);
    this.handleAdminDataSubmit = this.handleAdminDataSubmit.bind(this);
  }


  componentDidMount() {

    //syncWithDatabase
    /**
     * Sync these fields with database
     * (so that user can see what info has been already saved)
     * 
     * - site-info/administrator: 
     * 
     * NOTE: THIS CODE MUST BE OPTIMIZED
     */
    dbGetNode(`site-info/administrator`).on('value', (snapshot) => {

      const { screens } = this.state;

      dbGetSnapshotData({ snapshot, singleData: true }).then((data) => {

        if(data) {
          screens[3].sections[0].items[0].formData = {...data};
        } else {
          screens[3].sections[0].items[0].formData = {...tempData.screens[3].sections[0].items[0].formData};
        }

        this.setState({ screens });

      });

    }); // [end] dbGetNode


    /**
     * Sync these fields with database
     * - site-info/brand:
     */
    dbGetNode(`site-info/brand`).on('value', (snapshot) => {

      const { screens } = this.state;

      dbGetSnapshotData({ snapshot, singleData: true }).then((data) => {

        if(data) {
          screens[3].sections[0].items[1].formData = {...data};
        } else {
          screens[3].sections[0].items[1].formData = {...tempData.screens[3].sections[0].items[1].formData};
        }

        this.setState({ screens });

      });

    }); // [end] dbGetNode

  } // [end] componentDidMount


  /**
   * Toggle sibebar visibility
   * @param {*} data 
   * @param {*} itemId 
   */
  handleToggleSidebar(data, itemId) {
    console.log('---*****');
    const {screens} = this.state;
    screens[3].dividers[0].isOpen = !screens[3].dividers[0].isOpen;
    this.setState({ screens });
  }


  /**
   * Handle data submission from admin to the database
   * @param {*} param0 
   */
  handleAdminDataSubmit({ event, nodeRoot, nodeDir1, isSingleRecord }) {

    const dataSubmitted = dbSaveRecord({
      url:`${nodeRoot}/${nodeDir1}/`,
      record: { ...event.formData },
      isSingleRecord,
      isResolved: nodeRoot,
    });
    
    // Reset state after data is submitted
    dataSubmitted.then((data)=> {

      resetStateForms.call(this, data);

    });

  } //...


  /**
   * Handle data submission from admin to the database
   * ---------
   * 1) If "auth crendentials" are in local storage, insert them in "formData"
   * 2) Register user in DB (if no records exists), update "auth crendentials" in DB and move on
   * 3) Save DB "auth crendentials" in user object
   * 3) If "remember" is checked, save "auth crendentials" in local storage
   * 4) Clear form 
   * @param {*} param0 
   */
  handleUserLogin({ event, nodeRoot }) {

    console.log('user login', event);

    const dataSubmitted = dbSaveRecord({
      url:`${nodeRoot}/`,
      record: { ...event.formData },
      isResolved: nodeRoot,
    });
    
    // Reset state after data is submitted
    dataSubmitted.then((data)=> {

      console.log('data=', data);
      // resetStateForms.call(this, data);

    });

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
    // console.log(collection, collTargetId, subpageIndex)
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
      // console.log('...sections=', sections, sections[subpageIndex], subpageIndex);
      sections[subpageIndex].items = subsections;   
    }
    screens[3].sections = sections;
    // console.log(screens[3].sections)
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
              <Box className={`screen ${screen.name} overflow-y-scroll`}>
                <TopNavigation />
                {/*----------------------------*/}
                {/*--- Each view (or screen ---*/}
                {/*----------------------------*/}
                <p style={{ position:'absolute', top:0, left:0, background:'lime' }}>{screen.title}</p>
                <PreviewBox />
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
                            handleLogin={this.handleUserLogin}
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
      </div>
    );
  }
}

export default App;
