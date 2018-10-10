/**
 * Firebase configuration
 */

import firebase from 'firebase';

// const env

export const firebaseConfig = {
  dev: {
    apiKey: 'AIzaSyC3IUTe2DZfCGVO2dT5ekSuzD2sftiCClM',
    authDomain: 'ecomm-template1.firebaseapp.com',
    databaseURL: 'https://ecomm-template1.firebaseio.com',
    projectId: 'ecomm-template1',
    storageBucket: 'ecomm-template1.appspot.com',
    messagingSenderId: '25676979886',
  },
  prod: {
    apiKey: 'AIzaSyBOAG43skMxFHF2zKEiN4VGoeFZFmD-FX0',
    authDomain: 'dealerks-e9540.firebaseapp.com',
    databaseURL: 'https://dealerks-e9540.firebaseio.com',
    projectId: 'dealerks-e9540',
    storageBucket: 'dealerks-e9540.appspot.com',
    messagingSenderId: '25676979886',
  },
};




// Initialize Firebase
firebase.initializeApp(firebaseConfig.dev); // 'dev or 'prod'

// Get Firebase references
export const DATABASE = firebase.database(); // database
export const STORAGE = firebase.storage(); // images and ...
// export const PROVIDER = new firebase.auth.GoogleAuthProvider(); // provider
// export const AUTH = firebase.auth(); // auth


export default firebase;