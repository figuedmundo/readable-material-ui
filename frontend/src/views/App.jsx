import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import CategoriesTabs from "../components/CategoriesTabs.jsx";
import ListPosts from "../components/ListPosts.jsx";

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

  render() {
    const { classes } = this.props;
    // console.log("APP props", this.props);

    return (
      <div>
        <Sidebar open={this.state.drawer} toggleDrawer={this.toggleDrawer} />
        <div className={this.state.drawer ? classes.narrowContainer : null}>
          <Header open={this.state.drawer} toggleDrawer={this.toggleDrawer} />
          <CategoriesTabs />
          <ListPosts />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
// export default App;
