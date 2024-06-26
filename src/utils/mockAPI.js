// src/utils/mockAPI.js

export const getPosts = () => {
  return JSON.parse(localStorage.getItem("blogPosts")) || [];
};

export const savePosts = (posts) => {
  localStorage.setItem("blogPosts", JSON.stringify(posts));
};

export const getPostById = (id) => {
  const posts = getPosts();
  return posts.find((post) => post.id === id);
};

export const addPost = (post) => {
  const posts = getPosts();
  posts.push(post);
  savePosts(posts);
};

export const updatePost = (updatedPost) => {
  let posts = getPosts();
  posts = posts.map((post) =>
    post.id === updatedPost.id ? updatedPost : post
  );
  savePosts(posts);
};

export const deletePost = (id) => {
  let posts = getPosts();
  posts = posts.filter((post) => post.id !== id);
  savePosts(posts);
};
