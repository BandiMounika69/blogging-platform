// src/styles/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f7f7f7;
    color: #333;
    line-height: 1.6;
  }

  .container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 20px 0;
    color: #333;
  }

  p {
    margin: 10px 0;
    color: #555;
  }

  button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px;
    font-size: 1em;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #218838;
  }

  input, textarea {
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    font-size: 1em;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  .post {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px 0;
    border-radius: 4px;
    background-color: #fff;
    transition: background-color 0.3s;
  }

  .post:hover {
    background-color: violet;
  }

  .post-title {
    margin: 0 0 10px;
    font-size: 1.5em;
    color: #333;
  }

  .post-author, .post-summary, .post-date {
    margin: 5px 0;
    color: #555;
  }

  .post-link {
    text-decoration: none;
    color: #007bff;
    margin-right: 10px;
    transition: color 0.3s;
  }

  .post-link:hover {
    color: #0056b3;
    text-decoration: underline;
  }

  .read-more-link {
    font-weight: bold;
    color: #007bff;
  }

  .read-more-link:hover {
    color: #0056b3;
  }

  .edit-link {
    font-weight: bold;
    color: #28a745;
  }

  .edit-link:hover {
    color: #1c7430;
  }

  .delete-button {
    background-color: red;
    color: white;
    border: none;
    padding: 5px 10px;
    margin-left: 10px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .delete-button:hover {
    background-color: darkred;
  }
`;

export default GlobalStyle;
