

import { DATABASE, STORAGE } from './../../settings/firebase-configs.js';
import { TEXT_COPY } from './../../settings/language-and-text.js';
import { dataURItoBlob, stringToSlug } from './mix2.js';



/**
 * Toggle property of a specific item of a collection (give the opposite value to the rest)
 * - Operation is done of a copy of the collection (which will be returned)
 * 
 * @arrCollection: collection that will be mapped
 * @itemIdProp: string identifying the item whose property will be toggled  
 * @itemProp: property we want to toggle
 * @itemVal: value that the target item which get
 * @itemOppVal: opposite value (items which aren't qualifying will have it)
*/
export const toggleCollectionProperty = ({
  arrCollection, 
  targetId, 
  itemIdProp,
  itemProp, 
  itemVal, 
  itemOppVal,
}) => {
  const tplCollection = [...arrCollection];
  for(let i = 0, l=tplCollection.length; i < l; i += 1) {
    if(tplCollection[i][itemIdProp] === targetId) {
      tplCollection[i][itemProp] = itemVal;
    } else {
      tplCollection[i][itemProp] = itemOppVal;
    }
  }
  
  return tplCollection;
};



/*
 * Returns a text depending on the boolean value
*/
export const toggleText = (bool, val1, val2) => {
  return bool ? val1 : val2;
};


/**
 * Return the display name of a wrapped component
 */
export const getCompDisplayName = (WrappedComponent) => {

  return WrappedComponent.displayName || WrappedComponent.name || 'Component';

};


/**
 * Returns the node where the @url links
 */
export const dbGetNode = (url) => {

  return DATABASE.ref(`${url}`);

};


/**
 * Returns the most recent data from a snapshot
 */
export const dbGetSnapshotData = ({ snapshot, singleData }) => {

  let snapshotVal = snapshot.val();

  return new Promise((resolve) => {

    let finalValue = snapshotVal;

    if(finalValue) {

      if (!singleData) {

        const tempsItems = [];
        const itemsMap = new Map(Object.entries(finalValue));
        itemsMap.forEach((value) => {
          const post = Object.assign({}, value);
          // push values in a regular array
          tempsItems.push(post);
        }); // itemsMap
        // save array in state
        const dataReverse = tempsItems.reverse();
        finalValue = [...dataReverse];

      }

    } /*else {

      finalValue = [];

    }*/

    resolve(finalValue);

  });

}; // dbGetSnapshotData



/**
 * 
 * @param {*} url 
 */
export const dbDeleteRecord = (url) => {

  let deleteOk = window.confirm(TEXT_COPY.gen.confirmDelete);

  if (deleteOk) {

    DATABASE.ref(url).remove();

  }

};



/**
 * 
 * @param {*} url 
 * @param {*} record
 */
export const dbUpdateRecord = ({ url, record }) => {

  return new Promise((resolve) => {

    // console.log('url=', url);

    let data = {};
    data[url] = {...record};
    data[url].createdOn = Date.now();
    // console.log('..updating record=', record);
    DATABASE.ref().update(data, function(error) {
      if (error) {
        // The write failed...
      } else {
        // Data saved successfully!
        resolve(data[url]);
      }
    }); 

  });

};



/**
 * 
 * @param {*} url 
 */
export const dbSaveRecord = ({ url, record, isSingleRecord }) => {

  const listRef = DATABASE.ref(url);
  record.createdOn = Date.now();

  return new Promise((resolve) => {

    let updates = {};
    let recordId = '';

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
    listRef.update(updates, function(error) {
      if (error) {
        // The write failed...
      } else {
        // Data saved successfully!
        resolve(record);
      }
    });

  });// [end] promise

};



/**
 * 
 * @param {*} param0 
 */
export const dbGetFileUploaded = ({ dir, imgSlug }) => {

  return new Promise((resolve) => {

    STORAGE.ref(`${dir}/${imgSlug}`).getDownloadURL().then(function(url) {

      resolve({url});

    }).catch(function() {

      resolve(null);

    });
  });

};



/**
 * 
 * @param {*} param0 
 */
export const dbUploadFile = ({ dir, fileUrl, fileName }) => {

  const metadata = {
    // more info here...
    // https://firebase.google.com/docs/storage/web/file-metadata
  };

  const imgBlob     = dataURItoBlob(fileUrl);
  const imgSlug     = stringToSlug(fileName);
  const storageRef  = STORAGE.ref(`${dir}/${imgSlug}`); //(`${dir}/test`);

  return storageRef.put(imgBlob, metadata);

};



/**
 * Save data in localStorage
 * @param {*} collection (2 dimensions array, each cell containing a array [key, val])
 * (Array [Array [key, val], Array [key, val], Array [key, val]]) 
 */
export const localStorageSave = ({
  prefix,
  collection,
}) => {

  for( let i=0, l=collection.length ; i < l ; i++) {
    const collItem = collection[i];
    localStorage.setItem(`${prefix}${String(collItem[0])}`, collItem[1]);
  }

};


/**
 * Save data in localStorage
 * @param {*} collection (2 dimensions array, each cell containing a array [key, val])
 * (Array [Array [key, val], Array [key, val], Array [key, val]]) 
 */
export const localStorageGetItem = ({
  prefix,
  name,
}) => {

  return localStorage.getItem(`${prefix}${name}`);

};


/**
 * Remove data in localStorage
 * @param {*} collection (2 dimensions array, each cell containing a array [key, val])
 * (Array [Array [key, val], Array [key, val], Array [key, val]]) 
 */
export const localStorageRemove = ({
  prefix,
  name,
}) => {

  return localStorage.removeItem(`${prefix}${name}`);

};



