/* eslint-disable */

import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemIcon
} from "@material-ui/core";
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

  render() {
    const { classes, posts, title } = this.props;

    console.log("List Posts", posts)
    return (
      <Paper container="true" className={classes.postsContainer} >
        <List component="nav">

          <Typography variant="headline" component="h3" className={classes.postsTitle}>
            {title}
            <OrderBySelector />
            <AddPostButton />            
          </Typography>

          

          {Object.values(posts).map( post => (
            <ListItem key={post.id} button>
              <ListItemIcon>
                <Label />
              </ListItemIcon>
              <ListPostItem title={post.title} score={post.voteScore} timestamp={post.timestamp} />
            </ListItem>
          ))
          }
        </List>       
      </Paper>
    );
  }
}    

export default withStyles(styles)(ListPosts);
