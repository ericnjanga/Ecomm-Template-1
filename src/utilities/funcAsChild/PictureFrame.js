
/**
 * The goal: Give a child a resized and centered position behind the frame
 * How its done:
 * - Create a canvas of fixed height (possibiliby width) which hides any overflow
 * - Resizes the child image's width (this image is usually bigger than the frame)
 * - Re-centereds the child image's height (uses "ResizeAware" component to detect sizes changes)
 * 
 * - @imgWidth: width given to the child image
 * - @frameHeight: frame height (masks the child image height)
 * -------------------------------
 */


import React from 'react';
import PropTypes from 'prop-types';
import ResizeAware from 'react-resize-aware';


export default class PictureFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  /**
   * Calculate child image's left position and apply its width
   * and save all to the state
   */
  calculatePosAndDims = ({ width, height }) => {

    // console.log(width, height) 
    const left = (width - this.props.imgWidth)/2; 
    this.setState({ left, width:this.props.imgWidth });

  };


  // Calculate in mount
  componentDidMount() {

    this.calculatePosAndDims(this);

    // Integrate property styles with predefined ones
    const style = {
      ...this.props.style,
      height:`${this.props.frameHeight}px`,
      position: 'relative',
      overflow:'hidden',
      backgroundColor:'#CCCCCC',
    };
    this.setState({ style });

  }


  render() {
    return (
      <ResizeAware // Whatch for resizes and readjust the calculations
        style={{...this.state.style}}
        onlyEvent
        onResize={this.calculatePosAndDims}
        className={this.props.className}
      >  
        { // Image receiving these properties in real-time
          this.props.children({ position:'relative', left:`${this.state.left}px`, width:`${this.state.width}px` })
        }
      </ResizeAware>
    );
  }
}


// Props validation
PictureFrame.propTypes = {
  imgWidth: PropTypes.number,
  frameHeight: PropTypes.number,
};

PictureFrame.defaultProps = {
  imgWidth: 600,
  frameHeight: 300,
};
