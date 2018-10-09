import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
});

class AppSnackbar extends React.Component {

  render() {

    const {
      classes,
      horizontal,
      vertical,
      hideTimeout,
      active,
      message,
      handleClose,
    } = this.props;

    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: vertical,
            horizontal: horizontal,
          }}
          variant="success"
          open={active}
          autoHideDuration={hideTimeout}
          onClose={handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={
            <span id="message-id">
              { message }
            </span>
          }
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

AppSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
};

AppSnackbar.defaultProps = {
  vertical: 'bottom',
  horizontal: 'center',
  hideTimeout: 3000,
  active: false,
};

export default withStyles(styles)(AppSnackbar);