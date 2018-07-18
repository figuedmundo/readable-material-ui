import { GET_CATEGORIES } from "../actions/categoryActions";

const categories = (state = [], action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.categories.map(category => category.name);
    default:
      return state;
  }
};

export default categories;
