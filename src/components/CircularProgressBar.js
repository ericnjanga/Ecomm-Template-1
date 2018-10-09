// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import purple from '@material-ui/core/colors/purple';

// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

// const styles = theme => ({
//   progress: {
//     margin: theme.spacing.unit * 2,
//   },
// });

// function CircularProgressBar(props) {
//   const { classes } = props;
//   return (
//     <div>
//       <Paper className={classes.root} elevation={1}>
//         <Typography variant="h5" component="h3">
//           This is a sheet of paper.
//         </Typography>
//         <CircularProgress className={classes.progress} />
//         <CircularProgress className={classes.progress} size={50} />
//         <CircularProgress className={classes.progress} color="secondary" />
//         <CircularProgress className={classes.progress} style={{ color: purple[500] }} thickness={7} />
//       </Paper>
//     </div>
//   );
// }

// CircularProgressBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(CircularProgressBar);



import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import CircularProgress from '@material-ui/core/CircularProgress';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
};

class SimpleDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Submitting your information ...</DialogTitle>
        <div style={{ textAlign:'center', marginBottom:'30px' }}>
          {/* <List> */}
          <CircularProgress className={classes.progress} />
          {/* </List> */}
        </div>
      </Dialog>
    );
  }
}

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);

class SimpleDialogDemo extends React.Component {
  state = {
    open: false,
    selectedValue: emails[1],
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = value => {
    this.setState({ selectedValue: value, open: false });
  };

  render() {
    return (
      <div>
        <Typography variant="subtitle1">Selected: {this.state.selectedValue}</Typography>
        <br />
        <Button onClick={this.handleClickOpen}>Open simple dialog</Button>
        <SimpleDialogWrapped
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

export default SimpleDialogDemo;