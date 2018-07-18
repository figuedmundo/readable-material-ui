import { getCategories as getCategoriesApi } from "../utils/BackendApi";

export const GET_CATEGORIES = "GET_CATEGORIES";

// export function getCategories({name})
export const getCategories = categories => ({
  type: GET_CATEGORIES,
  categories
});

export const fetchCategories = () => dispatch =>
  getCategoriesApi().then(categories => dispatch(getCategories(categories)));
