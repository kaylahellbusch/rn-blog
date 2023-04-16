import React, { useReducer } from 'react';
import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  let { id, title, content } = action.payload;
  switch (action.type) {
    case 'add':
      id = state.length + 1;
      return [...state, { id, title, content, archived: false }];
    case 'edit':
      return state.map((blogPost) =>
        blogPost.id === id ? { ...blogPost, title, content } : blogPost
      );
    case 'delete':
      return state.map((blogPost) =>
        blogPost.id === id ? { ...blogPost, archived: true } : blogPost
      );
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: 'add', payload: { title, content } });
    callback && callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'delete', payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: 'edit', payload: { id, title, content } });
    callback && callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: 'Test Post', content: 'test content', id: 1 }]
);
