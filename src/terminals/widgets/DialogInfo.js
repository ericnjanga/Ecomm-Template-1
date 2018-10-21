import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import blue from '@material-ui/core/colors/blue';
import CircularProgress from '@material-ui/core/CircularProgress';
import Slide from '@material-ui/core/Slide';


function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
};


class DialogFeedback extends React.Component {

  render() {

    const { classes, active, message } = this.props;

    return (
      <Dialog
        // onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        TransitionComponent={Transition}
        open={active}
        // {...other}
      >
        <DialogTitle id="simple-dialog-title">{ message }</DialogTitle>
        <div style={{ textAlign:'center', marginBottom:'30px' }}>
          <CircularProgress className={classes.progress} />
        </div>
      </Dialog>
    );
  }
}

DialogFeedback.propTypes = {
  classes: PropTypes.object,
  onClose: PropTypes.func,
  message: PropTypes.string,
};

DialogFeedback.defaultProps = {
  classes: {},
  onClose: () => {},
  message: '',
};

export default withStyles(styles)(DialogFeedback);
