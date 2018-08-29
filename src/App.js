import React, { Component } from 'react';
import { dbGetNode, dbGetSnapshotData, dbSaveRecord, dbUpdateRecord } from './utilities/func/mix1.js';
import { APP_PREFIX, GlobalContext } from './settings/basics.js';
import { appStructure } from './settings/app-structure.js';
import AppPresentation from './AppPresentation.js';
import { resetStateForms } from './terminals/func.js';
import { toggleCollectionProperty, localStorageSave } from './utilities/func/mix1.js';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      screens: [...appStructure.screens],
      globals: {},
    };
    this.handleToggleSidebar = this.handleToggleSidebar.bind(this);
    this.handleAdminPageToggle = this.handleAdminPageToggle.bind(this);
    this.handleUserLogin = this.handleUserLogin.bind(this);
    this.handleAdminDataSubmit = this.handleAdminDataSubmit.bind(this);
  }


  /**
   * APP INIT
   * ------------------------
   * get Admin saved data (admin info, brand, ...)
   * @param {*} data 
   * @param {*} itemId 
   */
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
          screens[2].sections[0].items[0].formData = {...data};
        } else {
          screens[2].sections[0].items[0].formData = {...appStructure.screens[2].sections[0].items[0].formData};
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
          screens[2].sections[0].items[1].formData = {...data};
        } else {
          screens[2].sections[0].items[1].formData = {...appStructure.screens[2].sections[0].items[1].formData};
        }

        this.setState({ screens });

      });

    }); // [end] dbGetNode

  } // [end] componentDidMount


  /**
   * LOGIN SYSTEM
   * ------------------------
   * Toggle sibebar visibility
   * @param {*} data 
   * @param {*} itemId 
   */
  handleToggleSidebar(data, itemId) {
  
    const {screens} = this.state;
    screens[2].dividers[0].isOpen = !screens[2].dividers[0].isOpen;
    this.setState({ screens });
  
  }


  /**
   * [ADMIN] APP DATA (Admin saved data)
   * ------------------------
   * Handle data submission from admin to the database
   * @param {*} param0 
   */
  handleAdminDataSubmit({ event, nodeRoot, nodeDir1, isSingleRecord }) {

    const dataSubmitted = dbSaveRecord({
      url:`${nodeRoot}/${nodeDir1}/`,
      record: { ...event.formData },
      isSingleRecord,
    });
    
    // Reset state after data is submitted
    dataSubmitted.then((data)=> {

      resetStateForms.call(this, 'presets');

    });

  } //...


  /**
   * LOGIN SYSTEM
   * ------------------------
   * 1) Register user in DB (if no records exists), update "auth crendentials" in DB and move on
   * 2) Save DB "auth crendentials" in user object
   * 3) If "remember" is checked, save "auth crendentials" in local storage
   * 5) Clear form 
   * @param {*} param0 
   */
  handleUserLogin({ event, nodeRoot }) {

    let newUser = event.formData; // newly processed user data
    let userInDB;       // user in database
    let dataSubmitted;  // record submitted to DB

    dbGetNode(`users`).once('value', (snapshot) => {

      dbGetSnapshotData({ snapshot }).then((usersCollection) => {

        // Find-out if this user exist in the DB
        if (usersCollection) {

          userInDB = usersCollection.filter(currUser => {
            return (currUser.name===newUser.name && currUser.email===newUser.email && currUser.phone===newUser.phone);
          });

        }


        // 1) Register user in DB (if no records exists), update "auth crendentials" in DB and move on
        // ------------------
        // [Create new record]:
        // (This "new user doesn't exist" or "there is no users at all")
        if (!usersCollection || (userInDB && !userInDB.length)){

          dataSubmitted = dbSaveRecord({
            url:`${nodeRoot}/`,
            record: { ...newUser },
          });

        } // [Create new record]
        
        // [Update current record]:
        // (user exists in DB)
        if (userInDB && userInDB.length) {

          dataSubmitted = dbUpdateRecord({
            url: `users/${userInDB[0].id}`,
            record: { ...userInDB[0] },
          });

        } // [Create new record]


        // 2) Save DB "auth crendentials" in user object
        // 3) If "remember" is checked, save "auth crendentials" in local storage
        // *) Hide "auth page"
        // ------------------
        dataSubmitted.then((user)=> {

          const { globals, screens } = this.state;
          globals.user = { ...user };

          // Hide "auth page"
          screens[0].active = false;

          this.setState({ globals, screens });
          if (user['remember-auth']) {

            localStorageSave({ 
              prefix:`${APP_PREFIX}-`,
              collection: Object.entries(user),
            });
          }

        });
        
      });

    }); // [end] dbGetNode

  } // handleUserLogin

  
  /**
   * [ADMIN] TOGGLE PAGES VISIBILITY ON/OFF (when user switches from 1 tab to another)
   * ------------------------
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
      sections = this.state.screens[2].sections;
      // console.log('...sections=', sections, sections[subpageIndex], subpageIndex);
      sections[subpageIndex].items = subsections;   
    }
    screens[2].sections = sections;
    // console.log(screens[2].sections)
    this.setState({ screens });
  }


  render() {
    return (
      <GlobalContext.Provider value={{...this.state.globals}}>
        <AppPresentation
          {...this.state}
          handleToggleSidebar={this.handleToggleSidebar}
          handleAdminPageToggle={this.handleAdminPageToggle}
          handleUserLogin={this.handleUserLogin}
          handleAdminDataSubmit={this.handleAdminDataSubmit}
        />
      </GlobalContext.Provider>
    );
  }
}

export default App;
