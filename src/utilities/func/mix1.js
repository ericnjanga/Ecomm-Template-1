

import { database } from './../../settings/basics.js';

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

  if (singleData) {

    return _getSingleData(snapshot.val());

  }

  return _getsingleData(snapshot.val());

};

const _getsingleData = (snapshotVal) => { console.log('....multiple')

  let finalResult;
  if (snapshotVal) {//Avoid error if there is no DB objects 
    const tempsItems = [];
    const itemsMap = new Map(Object.entries(snapshotVal));
    itemsMap.forEach((value) => {
      const post = Object.assign({}, value);
      // push values in a regular array
      tempsItems.push(post);
    }); // itemsMap
    // save array in state
    const dataReverse = tempsItems.reverse();
    finalResult = [...dataReverse];
  } // snapshotVal
  return finalResult;

}


/**
 * Returns the most recent data from a snapshot
 */
export const _getSingleData = (snapshotVal) => { console.log('....single')

  let finalResult;
  if (snapshotVal) {//Avoid error if there is no DB objects
    const itemsMap = snapshotVal;
    finalResult = itemsMap;
  } // snapshotVal
  return finalResult;

};