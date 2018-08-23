

import { database } from './../../settings/basics.js';
import { textCopy } from './../../settings/temp-data.js';



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

  return database.ref(`${url}`);

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

  let deleteOk = window.confirm(textCopy['confirm delete']);

  if (deleteOk) {

    database.ref(url).remove();

  }

};



/**
 * 
 * @param {*} url 
 */
export const dbSaveRecord = ({ url, record, isSingleRecord, isResolved }) => {

  // let deleteOk = window.confirm(textCopy['confirm delete']);

  // if (deleteOk) {

  //   database.ref(url).remove();

  // }



  const listRef = database.ref(url);
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
    listRef.update(updates);
    resolve(isResolved)

  });// [end] promise

};


  