import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  Toolbar,
  AppBar,
  Typography,
  IconButton
} from "@material-ui/core";
import { AccountCircle, Menu } from "@material-ui/icons";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: "100%"
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="default"
            onClick={this.props.toggleDrawer}
          >
            <Menu />
          </IconButton>
          <Typography className={classes.flex} type="title" color="inherit">
            Readable
          </Typography>
          <div>
            <IconButton color="default">
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func
};

export default withStyles(styles)(Header);
