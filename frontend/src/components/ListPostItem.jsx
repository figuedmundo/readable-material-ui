import React from "react";
import PropTypes from "prop-types";
import { ListItemText } from "@material-ui/core";

const ListPostItem = ({ title, score }) => (
  <ListItemText
    primary={title}
    secondary={`Score: ${score}, created on July 20, 2014`}
  />
);

ListPostItem.propTypes = {
  title: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired
};

export default ListPostItem;
