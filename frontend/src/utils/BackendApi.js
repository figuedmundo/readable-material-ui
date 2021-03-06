/* eslint-disable */

const api = "http://localhost:3001";

// Generate a unique token for storing your bookshelf data on the backend server.
let { token } = localStorage;
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Authorization: token
};

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const getCategoryPosts = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())

export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())