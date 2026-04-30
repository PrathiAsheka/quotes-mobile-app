// QuotesListScreen.tsx
// app/(tabs)/QuotesListScreen.tsx
// Quotes List Screen
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useQuotes } from '../QuotesContext';

const QuotesListScreen = () => {
  const { quotes, toggleFavorite, deleteQuote, editQuote } = useQuotes();
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editedQuote, setEditedQuote] = useState('');
  const [editedAuthor, setEditedAuthor] = useState('');

  const handleEditQuote = (index: number, quote: string, author: string) => {  // Set the current quote and author to edit
    setEditingIndex(index);
    setEditedQuote(quote);
    setEditedAuthor(author);
  };

  const handleSaveEdit = (index: number) => { // Save the edited quote and author
    if (!editedQuote.trim() || !editedAuthor.trim()) {
      Alert.alert('Error', 'Both quote and author fields must be filled.');
      return;
    }

    editQuote(index, { ...quotes[index], quote: editedQuote, author: editedAuthor });
    setEditingIndex(null);
    setEditedQuote('');
    setEditedAuthor('');
  };

  return (
    <View style={styles.container}> 
      <FlatList
        data={quotes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.quoteContainer}>
            {editingIndex === index ? (
              <>
                <TextInput
                  style={styles.input}
                  value={editedQuote}
                  onChangeText={setEditedQuote}
                  placeholder="Edit quote"
                />
                <TextInput
                  style={styles.input}
                  value={editedAuthor}
                  onChangeText={setEditedAuthor}
                  placeholder="Edit author"
                />
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={[styles.button, styles.saveButton]}
                    onPress={() => handleSaveEdit(index)}
                  >
                    <Text style={styles.buttonText}>Save</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.button, styles.cancelButton]}
                    onPress={() => setEditingIndex(null)}
                  >
                    <Text style={styles.buttonText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <>
                <Text style={styles.quote}>"{item.quote}"</Text>
                <Text style={styles.author}>- {item.author}</Text>
                <Text style={styles.category}>Category: {item.category}</Text>
                <Text style={styles.timestamp}>Added on: {item.timestamp || 'No timestamp available'}</Text> 

                <View style={styles.buttonContainer}>
                  {/* Favorite Button */}
                  <TouchableOpacity
                    style={[styles.button, item.isFavorite ? styles.favoriteButton : styles.defaultButton]}
                    onPress={() => toggleFavorite(index)}
                  >
                    <Text style={styles.buttonText}>{item.isFavorite ? 'Unfavorite' : 'Favorite'}</Text>
                  </TouchableOpacity>

                  {/* Edit Button */}
                  <TouchableOpacity
                    style={[styles.button, styles.editButton]}
                    onPress={() => handleEditQuote(index, item.quote, item.author)}
                  >
                    <Text style={styles.buttonText}>Edit</Text> 
                  </TouchableOpacity>

                  {/* Delete Button */}
                  <TouchableOpacity
                    style={[styles.button, styles.deleteButton]}
                    onPress={() => deleteQuote(index)} 
                  >
                    <Text style={styles.buttonText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        )}
      />
    </View>
  );
};

export default QuotesListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F3E5F5',
  },
  quoteContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#7E57C2',
    borderRadius: 10,
    backgroundColor: '#EDE7F6',
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#4A148C',
  },
  author: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#6A1B9A',
  },
  category: {
    fontSize: 12,
    color: '#8E24AA',
    marginTop: 5,
  },
  timestamp: {
    fontSize: 12,
    color: '#6A1B9A',
    marginTop: 5,
    fontStyle: 'italic',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  favoriteButton: {
    backgroundColor: '#4CAF50',
  },
  editButton: {
    backgroundColor: '#FFC107',
  },
  deleteButton: {
    backgroundColor: '#F44336',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
  },
  cancelButton: {
    backgroundColor: '#BDBDBD',
  },
  defaultButton: {
    backgroundColor: '#BDBDBD',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#7E57C2',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    color: '#4A148C',
  },
});