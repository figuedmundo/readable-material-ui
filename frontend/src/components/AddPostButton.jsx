import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, IconButton } from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";

const styles = theme => ({
  addButton: {
    backgroundColor: theme.palette.background.paper,
    top: "0px",
    right: "0px",
    marginLeft: 20
  }
});

class AddPostButton extends Component {
  render() {
    const { classes } = this.props;

    return (
      <IconButton
        className={classes.addButton}
        color="primary"
        // onClick={this.props.toggleDrawer}
      >
        <AddCircle />
      </IconButton>
    );
  }
}

AddPostButton.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func
};

export default withStyles(styles)(AddPostButton);
