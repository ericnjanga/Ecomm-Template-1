
/**
 * Basic settings
 * Initialization of all services
 * - Initialize Firebase
 * - Get Firebase references
 * - settings
 */

import firebase, { firebaseConfig } from './firebase-configs';

// Initialize Firebase
firebase.initializeApp(firebaseConfig.dev);

// Get Firebase references
export const provider = new firebase.auth.GoogleAuthProvider(); // provider
export const database = firebase.database(); // database
export const auth = firebase.auth(); // auth
export const storage = firebase.storage(); // images and ...


// export const AdminContext = React.createContext({}); // Admin Context




// settings
const settings = {};

export default settings;
