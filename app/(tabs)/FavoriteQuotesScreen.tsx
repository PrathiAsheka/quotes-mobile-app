// FavoriteQuotesScreen.tsx
// app/(tabs)/FavoriteQuotesScreen.tsx
// Favorite Quotes Screen
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { useQuotes } from '../QuotesContext';

const FavoriteQuotesScreen = () => {
  const { quotes } = useQuotes();

  // Filter only favorite quotes
  const favoriteQuotes = quotes.filter((quote) => quote.isFavorite);

  const handleCopyQuote = async (quote: string) => {
    try {
      await Clipboard.setStringAsync(quote);
      Alert.alert('Copied to Clipboard', 'The quote has been copied to your clipboard.');
    } catch (error) {
      Alert.alert('Error', 'Failed to copy the quote.');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteQuotes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.quoteContainer}>
            <Text style={styles.quote}>"{item.quote}"</Text>
            <Text style={styles.author}>- {item.author}</Text>

            <TouchableOpacity
              style={styles.copyButton}
              onPress={() => handleCopyQuote(item.quote)}
            >
              <Text style={styles.buttonText}>Copy Quote</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default FavoriteQuotesScreen;

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
  copyButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#B622BA',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});