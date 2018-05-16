/* eslint-disable */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { Grid, Paper, Typography } from 'material-ui';
import Tabs, { Tab } from 'material-ui/Tabs';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { Label } from '@material-ui/icons'

import ListPostItem from './ListPostItem.jsx'
import OrderBySelector from "./OrderBySelector.jsx";
import AddPostButton from "./AddPostButton.jsx";

const styles = theme => ({
  postsContainer: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    width: "60%",
    margin: "auto"
  },
  postsTitle: {
    // position: "relative",
    marginBottom: theme.spacing.unit * 3, 
  }
});

class ListPosts extends Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    const posts = ["aa", "bb"]
    const title = "custom posts title"
    this.setState({
      posts: posts,
      title: title,
    })
  }

  render() {
    const { classes } = this.props;
    const { posts, title } = this.state;
    console.log("List Posts", posts)
    return (
      <Paper container className={classes.postsContainer} >
        <List component="nav">

          <Typography variant="headline" component="h3" className={classes.postsTitle}>
            {title}
            <OrderBySelector />
            <AddPostButton />            
          </Typography>

          

          {posts.map( post => (
            <ListItem button>
              <ListItemIcon>
                <Label />
              </ListItemIcon>
              <ListPostItem postTitle={post} />
            </ListItem>
          ))
          }
        </List>       
      </Paper>
    );
  }
}    

export default withStyles(styles)(ListPosts);
