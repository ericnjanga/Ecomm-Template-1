
/**
 * Fetch image data from Firebase storage
 * - Renders a placeholder image in the meantime
 * 
 * @placeHolderWidth: Image placeholder's height
 * @placeholderHeight: Image placeholder's width
 * -------------------------------------------------------------
 */


import React from 'react';
import PropTypes from 'prop-types';
import { dbGetFileUploaded } from './../../utilities/func/mix1.js';


class FetchImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: `https://via.placeholder.com/${this.props.placeHolderWidth}x${this.props.placeholderHeight}`,
    };
  }


  componentDidMount() {

    this._ismounted = true;

    // Ony try to fetch if "node directory" and "file name" are provided
    // Update state's "url" property when data is resolved
    if (this.props.dir && this.props.name) {

      dbGetFileUploaded({ dir:this.props.dir, imgSlug:this.props.name }).then((data) => {
        if(data && data.url) {
          const { url } = data;
          // console.log('------url=', url);
          this.setState({ url })
        }
      });

    }

  }


  render() {

    return (
      <React.Fragment>
        { this.props.children(this.state.url) }
      </React.Fragment>
    );

  }
}


// Props validation
FetchImage.propTypes = {
  placeHolderWidth: PropTypes.number,
  placeholderHeight: PropTypes.number,
};

FetchImage.defaultProps = {
  placeHolderWidth: 358,
  placeholderHeight: 180,
};


export default FetchImage;
