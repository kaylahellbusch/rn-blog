import React, { useContext } from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const id = navigation.getParam('id');
  const blogPost = state.find((blogPost) => blogPost.id === id);
  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => {
          navigation.pop();
        });
      }}
      initialValue={blogPost}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
