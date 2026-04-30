//Category.tsx
// app/(tabs)/Category.tsx
// Category Screen
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useQuotes } from '../QuotesContext';

const CategoryScreen = () => {
  const { quotes } = useQuotes();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Group quotes by category
  const groupedQuotes = quotes.reduce((acc, quote) => {
    if (!acc[quote.category]) {
      acc[quote.category] = [];
    }
    acc[quote.category].push(quote);
    return acc;
  }, {} as Record<string, typeof quotes>);

  // List of categories with emojis
  const categoriesWithEmojis: Record<string, string> = {
    Inspiration: '💡',
    Love: '❤️',
    Humor: '😂',
    Motivation: '🔥',
    Life: '🌱',
    Success: '🏆',
    Wisdom: '📚',
  };

  // Filtered quotes based on selected category
  const filteredQuotes = selectedCategory
    ? groupedQuotes[selectedCategory] || []
    : quotes;

  return (
    <View style={styles.container}>
      {/* Category Selection */}
      <View style={styles.categorySelection}>
        {Object.keys(categoriesWithEmojis).map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategoryButton,
            ]}
            onPress={() =>
              setSelectedCategory(selectedCategory === category ? null : category)
            }
          >
            <Text style={styles.categoryButtonText}>
              {categoriesWithEmojis[category]} {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Display Quotes */}
      <FlatList
        data={filteredQuotes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.quoteContainer}>
            <Text style={styles.quote}>"{item.quote}"</Text>
            <Text style={styles.author}>- {item.author}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.noQuotesText}>
            No quotes available for this category.
          </Text>
        }
      />
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F3E5F5',
  },
  categorySelection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  categoryButton: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#7E57C2',
    borderRadius: 20,
    backgroundColor: '#EDE7F6',
  },
  selectedCategoryButton: {
    backgroundColor: '#7E57C2',
  },
  categoryButtonText: {
    fontSize: 14,
    color: '#4A148C',
    fontWeight: 'bold',
  },
  quoteContainer: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#7E57C2',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
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
  noQuotesText: {
    fontSize: 16,
    color: '#4A148C',
    textAlign: 'center',
    marginTop: 20,
  },
});


