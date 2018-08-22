


/**
 * Reset form properties connected to the state
 * @param {*} dataNode 
 */
export function resetStateForms (dataNode) {
  // for presets ...
  if (dataNode==='presets') {
    const { screens } = this.state;

    if (dataNode) {
      screens[3].sections[1].items[0].formData = { name: '' };
      this.setState({ screens });
    }

  }

}; //[end] resetStateForms