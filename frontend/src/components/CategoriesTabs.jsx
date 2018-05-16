/* eslint-disable */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { Grid, Paper, Typography } from 'material-ui';
import Tabs, { Tab } from 'material-ui/Tabs';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { Label } from '@material-ui/icons'
import { getCategories } from "../utils/BackendApi";

const styles = theme => ({
  root: {
    flexGrow: 1,
    state: null,
    // display: 'block'
  },
  paper: {
    height: 140,
    width: 100,
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class CategoriesTabs extends Component {
  state = {
    categories: [],
  }

  componentDidMount() {
    getCategories().then((data) => {
      console.log(data)
      this.setState({
        categories: data
      })
    })
  }

  render() {
    const { classes } = this.props;
    const { categories } = this.state;
    return (
      <Paper container className={classes.root} >
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {categories.map(c => <Tab key={c.name} label={c.name} />)}          
        </Tabs>          
      </Paper>
    );
  }
}    

export default withStyles(styles)(CategoriesTabs);
