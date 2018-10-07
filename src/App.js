import React, { Component } from 'react';
import { dbGetNode, dbGetSnapshotData, dbSaveRecord, dbUpdateRecord, dbUploadFile } from './utilities/func/mix1.js';
import { APP_PREFIX, GlobalContext } from './settings/basics.js';
import { appStructure } from './settings/app-structure.js';
import AppPresentation from './AppPresentation.js';
import { resetStateForms } from './terminals/func.js';
import { localStorageSave, localStorageGetItem } from './utilities/func/mix1.js';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      shouldUpdate: true, // Help contrain main and children components rendering
      screens: [...appStructure.screens],
      globals: {
        itemDetailModal: false,
        handleSubmit: this.handleAdminDataSubmit,
      },
      views:{
        auth: {
          active: true,
        },
      },
    };  
    // this.handleAdminDataSubmit = this.handleAdminDataSubmit.bind(this);
  }



  /**
   * APP INIT
   * ------------------------
   * get Admin saved data (admin info, brand, ...)
   * @param {*} data 
   * @param {*} itemId 
   */
  componentDidMount() {

    const { screens, globals, views } = this.state;
    const { state } = this;
    // console.log('**1** App mounted');

    /**
     * [update product record]
     * Update current product formdata with item information
     * @param {*} prodFormData 
     */
    state.globals.updateProdFormData = (prodFormData) => {

      const { screens } = this.state;
      // console.log('???....', prodFormData);
      const formData = {...prodFormData};
      delete formData['image']; // input file has to be deleted because it causes problem
      screens[2].sections[2].items[0].formData = {...formData};
      this.setState({ screens });

    };


    /**
     * Toggle item detail modal
     * @param {*} prodFormData 
     */
    state.globals.toggleItemDetailModal = (data, bool) => {

      const { globals } = this.state;

      globals.itemDetailModal = bool;
      if(data) {
        globals.itemDetail = data; 
      }
      
      this.setState({ globals, shouldUpdate:false });

      // console.log('-globals.itemDetailModal-', globals.itemDetailModal);

    };
    
    


    /**
     * -----------------------------------------------------------------
     * HIDE "AUTH PANEL" IF USER INFO HAVE BEEN SAVED IN LOCAL STORAGE
     * -----------------------------------------------------------------
     */
    const savedUserInfo = {
      name: localStorageGetItem({ prefix:`${APP_PREFIX}-`, name:'name' }) ? localStorageGetItem({ prefix:`${APP_PREFIX}-`, name:'name' }) : null,
      email: localStorageGetItem({ prefix:`${APP_PREFIX}-`, name:'email' }) ? localStorageGetItem({ prefix:`${APP_PREFIX}-`, name:'email' }) : null,
      phone: localStorageGetItem({ prefix:`${APP_PREFIX}-`, name:'phone' }) ? Number(localStorageGetItem({ prefix:`${APP_PREFIX}-`, name:'phone' })) : null,
    };

    // If there are some user saved informations:
    // - Get that user in the database and save its info inside the global object
    // - Hide logi n screen
    if (savedUserInfo.name && savedUserInfo.email && savedUserInfo.phone) {

      dbGetNode(`users`).once('value', (snapshot) => {

        dbGetSnapshotData({ snapshot }).then((usersCollection) => {

          // Find-out if this user exist in the DB
          if (usersCollection) {

            const userInDB = usersCollection.filter(currUser => {
              return (currUser.name===savedUserInfo.name && currUser.email===savedUserInfo.email && currUser.phone===savedUserInfo.phone);
            });

            // Save user database info inside the global object
            const { globals } = this.state;
            globals.user = userInDB[0];
            this.setState({ globals });

            // Hide login screen
            views.auth.active = false;

          }
        
        });
        
      });

    }


    /**
     * -----------------------------------------------------------------
     * Sync these fields with database
     * (so that user can see what info has been already saved)
     * 
     * - site-info: 
     * 
     * NOTE: THIS CODE MUST BE OPTIMIZED
     * -----------------------------------------------------------------
     */
    dbGetNode(`site-info`).on('value', (snapshot) => {

      dbGetSnapshotData({ snapshot, singleData: true }).then((data) => {

        // console.log('---data=', data);

        /**
         * ---------------------------
         * OPTMIZE THIS PROCESS LATER
         * ---------------------------
         */
        if (data) { // only if data is available

          // Save brand globally
          if (data.brand) { // brand
            // Save autofill admin form
            globals.brand = data.brand;
            // update app title with brand name and slogan
            document.title = globals.brand.name + (data.brand.slogan ? ` | ${data.brand.slogan}` : '');
          }

          // Save system globally
          if (data.system) { // system
            // Save autofill admin form
            globals.system = data.system;
          }
          

        } // [end] only if data is available


        /**
         * ---------------------------
         * OPTMIZE THIS PROCESS LATER
         * ---------------------------
         */

        this.setState({ screens, globals }, ()=>{ /*console.log('** 1 - a ** [App mounted] screens / update globals (brand, currency) ');*/ });

      }); // [end] dbGetSnapshotData

    }); // [end] dbGetNode

  } // [end] componentDidMount


  /**
   * [ADMIN] APP DATA (Admin saved data)
   * ------------------------
   * Handle data submission from admin to the database
   * @param {*} param0 
   */
  handleAdminDataSubmit = ({ event, nodeRoot, nodeDir1, isSingleRecord }) => {

    // console.log('====', nodeRoot, nodeDir1);

    // Submitting a product
    if (nodeRoot==='products' && nodeDir1==='product') {

      const { image, title } = event.formData;
      const imgUploaded = dbUploadFile({ dir:'products', fileUrl:image, fileName:title });

      imgUploaded.then((data) => {
  
        // console.log('*****data=', data    );
  
        //...
        const { name } = data.metadata;
        const record = event.formData;
        record.image = name;

        // [*] Submit record (code duplicated: must be optimized)
        const prodSubmitted = dbSaveRecord({
          url:`${nodeRoot}/${nodeDir1}/`,
          record: { ...record },
          isSingleRecord,
        });
  
        // Reset state after data is submitted
        prodSubmitted.then((data)=> {
    
          resetStateForms.call(this, 'product');
    
        });
        // [*] Submit record (code duplicated: must be optimized)
  
      }); // [end] imgUploaded

    // Submit another record
    } else {
      
      // [*] Submit record (code duplicated: must be optimized)
      const prodSubmitted = dbSaveRecord({
        url:`${nodeRoot}/${nodeDir1}/`,
        record: { ...event.formData },
        isSingleRecord,
      });

      // Reset state after data is submitted
      prodSubmitted.then((data)=> {
  
        resetStateForms.call(this, 'presets');
  
      });
      // [*] Submit record (code duplicated: must be optimized)

    }

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
  handleUserLogin = ({ event, nodeRoot }) => {

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

        console.log('....1' );
        // 2) Save DB "auth crendentials" in user object
        // 3) If "remember" is checked, save "auth crendentials" in local storage
        // *) Hide "auth page"
        // ------------------
        dataSubmitted.then((user)=> {     console.log('....user=', user );

          const { globals, screens, views } = this.state;
          globals.user = { ...user };

          // Hide "auth page"
          views.auth.active = false;

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

  
 

  render() {
    return (
      <GlobalContext.Provider value={{...this.state.globals}}>
        <AppPresentation
          {...this.state} 
          handleUserLogin={this.handleUserLogin}
          handleAdminDataSubmit={this.handleAdminDataSubmit}
        />
      </GlobalContext.Provider>
    );
  }
}

export default App;
