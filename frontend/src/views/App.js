import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { compose } from "recompose";

import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import CategoriesTabs from "../components/CategoriesTabs.jsx";
import ListPosts from "../components/ListPosts.jsx";

import { fetchCategories } from "../actions/categoryActions";
import { fetchPosts } from "../actions/postActions";

const drawerWidth = 216;

const styles = theme => ({
  narrowContainer: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  }
});

class App extends Component {
  state = {
    drawer: false,
    login: false
  };

  toggleDrawer = () => {
    this.setState({
      ...this.state,
      drawer: !this.state.drawer
    });
  };

  componentDidMount() {
    this.props.getCategories();
    this.props.getPosts();
  }

  render() {
    const { classes, posts } = this.props;
    console.log("APP props", this.props);

    return (
      <div>
        <Sidebar open={this.state.drawer} toggleDrawer={this.toggleDrawer} />
        <div className={this.state.drawer ? classes.narrowContainer : null}>
          <Header open={this.state.drawer} toggleDrawer={this.toggleDrawer} />
          <CategoriesTabs categories={this.props.categories} />
          <ListPosts title={"Home"} posts={posts} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.object,
  getCategories: PropTypes.func,
  getPosts: PropTypes.func,
  categories: PropTypes.array,
  posts: PropTypes.object
};

const mapStateToProps = state => ({
  categories: state.categories,
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(fetchCategories()),
  getPosts: () => dispatch(fetchPosts())
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(App);
