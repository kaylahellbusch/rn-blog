import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValue }) => {
  const [title, setTitle] = useState(initialValue.title);
  const [content, setContent] = useState(initialValue.content);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
      />
      <Text style={styles.textStyle}>Content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={setContent}
        placeholder="Content"
      />
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValue: {
    title: '',
    content: '',
  },
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  textStyle: {
    fontSize: 45,
    marginBottom: 5,
  },
  input: {
    fontSize: 18,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
  },
});

export default BlogPostForm;
