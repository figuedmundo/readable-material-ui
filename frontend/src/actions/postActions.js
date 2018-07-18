import { getPosts as getPostsApi } from "../utils/BackendApi";

export const GET_POSTS = "GET_POSTS";
export const GET_CATEGORY_POSTS = "GET_CATEGORY_POSTS";

export const getPosts = posts => ({
  type: GET_POSTS,
  posts
});

export const fetchPosts = () => dispatch =>
  getPostsApi().then(posts => dispatch(getPosts(posts)));
