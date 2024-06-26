// src/components/BlogPostList.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPosts, deletePost } from "../utils/mockAPI";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
`;

const Post = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  background-color: #fff;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Title = styled.h2`
  margin: 0 0 10px;
  color: #333;
`;

const Button = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  margin-left: 10px;
  border-radius: 4px;

  &:hover {
    background-color: darkred;
  }
`;

const BlogPostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  const handleDelete = (id) => {
    deletePost(id);
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <Container>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <Post key={post.id}>
          <Title>{post.title}</Title>
          <p>By {post.author}</p>
          <p>{post.summary}</p>
          <p>{new Date(post.publicationDate).toLocaleDateString()}</p>
          <Link to={`/post/${post.id}`} className="post-link">
            Read more
          </Link>
          <Link to={`/edit/${post.id}`} className="post-link">
            Edit
          </Link>
          <Button onClick={() => handleDelete(post.id)}>Delete</Button>
        </Post>
      ))}
      <Link to="/add" className="post-link">
        Add New Post
      </Link>
    </Container>
  );
};

export default BlogPostList;
