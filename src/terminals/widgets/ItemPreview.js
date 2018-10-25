
/**
 * Renders a preview version of the product (which can be further "contenced")
 * - Renders:
 * -- Title (if not in @modeCondenced)
 * -- Price
 * -- kilometers
 * -- price (In all available currencies)
 * -- ItemInfo1 Component
 * -- CTA button
 * 
 * - Props
 * - @data: data to be rendered (title, price, ...)
 * - @modeCondenced: Dictate rendering style
 * -------------------------------
 */


import React from 'react';
import PropTypes from 'prop-types';
import ItemModal from './ItemModal.js';
import ItemInfo1 from './ItemInfo1.js';
import FetchImage from './../../utilities/funcAsChild/fetchImage.js';
import PictureFrame from './../../utilities/funcAsChild/PictureFrame.js';


class ItemPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: {
        show: false,
      },
    };
  }
  

  /**
   * Toggle item detail modal
   * @param {*} prodFormData
   */
  toggleModal = () => {

    this.setState((state) => {
      const { modal } = state;
      modal.show = !modal.show;
      return { modal };
    });

  }


  render() {

    const {
      data,
      modeCondenced,
    } = this.props;

    if(!data || !data.title) {
      return false;
    }

    return (
      <React.Fragment>
        <div className="card box-shadow-hover">
          <FetchImage
            dir='products'
            name={data.image}
          >
            {
              (url) => (
                <PictureFrame
                  className='prodImg-frame preview'
                  imgWidth={400}
                  frameHeight={200}
                >
                  {
                    (position) => (
                      <img
                        style={{...position}}
                        src={url}
                        alt={data.title}
                      />
                    )
                  }
                </PictureFrame>
              )
            }
          </FetchImage>

          <div className="card-body">
            <ItemInfo1
              {...data}
              isSmall
              truncate
            />

            <DisplayItemText
              data={data}
              modeCondenced={modeCondenced}
            />
            <div className="text-center">
              <button className="btn btn-link" onClick={this.toggleModal}>More details</button>
            </div>
          </div>
        </div>

        <ItemModal
          {...this.state.modal}
          data={this.props.data}
          toggle={this.toggleModal}
        />
      </React.Fragment>
    );

  }// [end] render
};


// Props validation
ItemPreview.propTypes = {
  data: PropTypes.shape({}).isRequired,
  modeCondenced: PropTypes.bool,
};

ItemPreview.defaultProps = {
  modeCondenced: false,
};


export default ItemPreview;








/**
 * Helps for making code more readable
 * @param {*} param0 
 */
const TextTrim = ({ length, children }) => (
  <React.Fragment>
    {
      children.substring(0, length)
    }
    {
      (length < children.length) && ' ...'
    }
  </React.Fragment>
);

const DisplayItemText = ({ data, modeCondenced }) => {
  // console.log('>>>>modeCondenced=', modeCondenced)
  if(modeCondenced || !data || !data.title) {
    return false;
  }
  return (
    <React.Fragment>
      <h5 className="card-title">
        <TextTrim length={18}>{data.title}</TextTrim>
      </h5>
      {/* <p className="card-text">
        <TextTrim length={40}>{data.description}</TextTrim>
      </p> */}
    </React.Fragment>
  );
};
