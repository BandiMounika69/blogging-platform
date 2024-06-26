// src/components/AddEditPost.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { addPost, updatePost, getPostById } from "../utils/mockAPI";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 800px;
  margin: auto;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
  min-height: 150px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 20px 0;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
`;

const AddEditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    author: "",
    content: "",
    publicationDate: new Date().toISOString().split("T")[0],
  });

  useEffect(() => {
    if (id) {
      const existingPost = getPostById(id);
      if (existingPost) {
        setPost(existingPost);
      }
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updatePost({ ...post, id });
    } else {
      addPost({ ...post, id: Date.now().toString() });
    }
    navigate("/");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="title"
        value={post.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <Input
        type="text"
        name="author"
        value={post.author}
        onChange={handleChange}
        placeholder="Author"
        required
      />
      <Textarea
        name="content"
        value={post.content}
        onChange={handleChange}
        placeholder="Content"
        required
      />
      <Input
        type="date"
        name="publicationDate"
        value={post.publicationDate}
        onChange={handleChange}
        required
      />
      <Button type="submit">Save</Button>
    </Form>
  );
};

export default AddEditPost;
