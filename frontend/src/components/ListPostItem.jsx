import React from "react";
import PropTypes from "prop-types";
import { ListItemText } from "material-ui/List";

const ListPostItem = ({ postTitle }) => (
  <ListItemText
    primary={postTitle}
    secondary="Score: 3, created on July 20, 2014"
  />
);

ListPostItem.propTypes = {
  postTitle: PropTypes.string.isRequired
};

export default ListPostItem;
