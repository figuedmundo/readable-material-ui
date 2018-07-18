import React from "react";
import PropTypes from "prop-types";

import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { Inbox } from "@material-ui/icons";

// class Sidebar extends Component {
const Sidebar = ({ ...props }) => (
  // render() {
  <Drawer open={props.open} onClose={props.toggleDrawer} type="persistent">
    <div
      tabIndex={0}
      role="button"
      onClick={props.toggleDrawer}
      onKeyDown={props.toggleDrawer}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary="Something Else" />
        </ListItem>
      </List>
    </div>
  </Drawer>
);

Sidebar.propTypes = {
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func
};

export default Sidebar;
