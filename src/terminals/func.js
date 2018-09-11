


/**
 * Reset form properties connected to the state
 * @param {*} dataNode 
 */


import { appStructure } from './../settings/app-structure.js';

/**
 * Returns initial data for each item
 * @param {*} dataNode 
 */
export function resetStateForms (dataNode) {

  const { screens } = this.state;
  // console.log('>>>dataNode=', dataNode);

  switch(dataNode){
    case 'presets':
      screens[2].sections[1].items[0].formData = { name: '' };
      break;
    case 'product':
      screens[2].sections[2].items[0].formData = appStructure.screens[2].sections[2].items[0].formData;
      break;
  }

  this.setState({ screens });

}; //[end] resetStateForms