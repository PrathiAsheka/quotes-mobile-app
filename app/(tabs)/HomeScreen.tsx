//Home Screen
// app/(tabs)/HomeScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const HomeScreen = () => { // Main Screen Navigation
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to QuotesWorld 📚</Text>

      <Link href="/QuotesListScreen" style={styles.linkButton}>
        View Quotes
      </Link>

      <Link href="/AddQuoteScreen" style={styles.linkButton}>
        Add a Quote
      </Link>

      <Link href="/Category" style={styles.linkButton}>
        Categories
      </Link>

      <Link href="/FavoriteQuotesScreen" style={styles.linkButton}>
        Favorites
      </Link>

      <Link href="/AboutScreen" style={styles.linkButton}>
        About the App
      </Link>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({ // Styles for HomeScreen
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F3E5F5',
    

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  linkButton: {
    fontSize: 18,
    color: 'white',
    backgroundColor: '#B83AC9',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 8,
    textAlign: 'center',
    width: 200,
  },
});