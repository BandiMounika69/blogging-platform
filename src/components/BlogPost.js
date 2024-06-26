// src/components/BlogPost.js
import React from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../utils/mockAPI";
import styled from "styled-components";

const PostDetail = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
`;

const BlogPost = () => {
  const { id } = useParams();
  const post = getPostById(id);

  return (
    <PostDetail>
      <h1>{post.title}</h1>
      <p>By {post.author}</p>
      <p>{new Date(post.publicationDate).toLocaleDateString()}</p>
      <div>{post.content}</div>
    </PostDetail>
  );
};

export default BlogPost;
