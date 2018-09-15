
/**
 * Basic settings
 * Initialization of all services
 * - Initialize Firebase
 * - Get Firebase references
 * - settings
 */

import React from 'react';
import firebase, { firebaseConfig } from './firebase-configs';

// Initialize Firebase
firebase.initializeApp(firebaseConfig.prod); // 'dev or 'prod'

// Application prefix
export const APP_PREFIX = 'Et1';

// Get Firebase references
export const PROVIDER = new firebase.auth.GoogleAuthProvider(); // provider
export const DATABASE = firebase.database(); // database
export const AUTH = firebase.auth(); // auth
export const STORAGE = firebase.storage(); // images and ...

// Global context
export const GlobalContext = React.createContext({}); // Global Context


// settings
const SETTINGS = {};

export default SETTINGS;
