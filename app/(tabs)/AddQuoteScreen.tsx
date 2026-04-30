// AddQuoteScreen.tsx
// app/(tabs)/AddQuoteScreen.tsx
// Add Quote Screen
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Importing Picker for category selection
import { useQuotes } from '../QuotesContext';

const AddQuoteScreen = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Inspiration');
  const { addQuote } = useQuotes();

  const handleAddQuote = () => {
    if (!quote.trim() || !author.trim()) {
      Alert.alert('Error', 'Please enter both the quote and the author.');
      return;
    }

    const timestamp = new Date().toLocaleString();
    addQuote({ quote, author, category, timestamp });

    Alert.alert('Quote added Successfully!'); // Show success message

    setQuote('');
    setAuthor('');
    setCategory('Inspiration');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.title}>Add a New Quote ✍️</Text>

      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Enter the quote"
        multiline
        value={quote}
        onChangeText={setQuote}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter the author"
        value={author}
        onChangeText={setAuthor}
      />

      <Picker
        selectedValue={category}
        onValueChange={(itemValue) => setCategory(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Inspiration" value="Inspiration" />
        <Picker.Item label="Love" value="Love" />
        <Picker.Item label="Humor" value="Humor" />
        <Picker.Item label="Motivation" value="Motivation" /> 
        <Picker.Item label="Life" value="Life" />
        <Picker.Item label="Success" value="Success" />
        <Picker.Item label="Wisdom" value="Wisdom" />
      </Picker>

      <Button 
        title="Add Quote" 
        onPress={handleAddQuote} 
        color="#B70FC4" // Updated button color
      />
    </KeyboardAvoidingView>
  );
};

export default AddQuoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#F3E5F5',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
    color: '#4A148C',
  },
  input: {
    borderWidth: 1,
    borderColor: '#7E57C2',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    backgroundColor: '#EDE7F6',
    color: '#4A148C',
  },
  picker: {
    borderWidth: 1,
    borderColor: '#7E57C2',
    borderRadius: 10,
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#EDE7F6',
    color: '#4A148C',
  },
});
