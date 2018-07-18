/* eslint-disable */

import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, Tabs, Tab } from "@material-ui/core";
import { Label } from "@material-ui/icons";

import { getCategories } from "../utils/BackendApi";

const styles = theme => ({
  root: {
    flexGrow: 1,
    state: null
    // display: 'block'
  },
  paper: {
    height: 140,
    width: 100,
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

class CategoriesTabs extends Component {
  state = {
    categories: [],
    value: "0"
  };

  render() {
    const { classes, categories } = this.props;
    return (
      <Paper container="true" elevation={2} className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {categories.map(c => <Tab key={c} label={c} />)}
        </Tabs>
      </Paper>
    );
  }
}

export default withStyles(styles)(CategoriesTabs);
