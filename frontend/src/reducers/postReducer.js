import { GET_POSTS } from "../actions/postActions";

const posts = (state = {}, action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.posts.reduce(
        (obj, post) => ((obj[post.id] = post), obj),
        {}
      );
    default:
      return state;
  }
};

export default posts;
