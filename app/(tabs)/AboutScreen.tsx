import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>About QuotesApp ✨</Text>
      <Text style={styles.description}>
        Welcome to <Text style={styles.bold}>QuotesApp</Text>! 🌟 This app is your personal collection of inspirational, humorous, and motivational quotes. Whether you're looking for wisdom or want to save your favorite quotes, this app has everything you need.
      </Text>

      <Text style={styles.sectionTitle}>📖 What You Can Do:</Text>
      <Text style={styles.features}>
        <Text style={styles.bold}>- Browse Quotes by Category:</Text> Explore quotes grouped into categories like 💡 Inspiration, ❤️ Love, 😂 Humor, and more.
        {'\n'}
        <Text style={styles.bold}>- Add Your Own Quotes:</Text> Add your favorite quotes with the author's name and assign them to a category.
        {'\n'}
        <Text style={styles.bold}>- Mark Quotes as Favorites:</Text> Tap the ❤️ button to save quotes for quick access later.
        {'\n'}
        <Text style={styles.bold}>- Edit or Delete Quotes:</Text> Modify or remove quotes as needed to keep your collection organized.
      </Text>

      <Text style={styles.sectionTitle}>🛠️ How to Use the App:</Text>
      <Text style={styles.steps}>
        <Text style={styles.bold}>1️⃣ Home Screen:</Text> Start your journey here! Navigate to different sections of the app using the menu buttons.
        {'\n\n'}
        <Text style={styles.bold}>2️⃣ Browse Categories:</Text> Tap on a category (e.g., 💡 Inspiration) to view quotes related to that category.
        {'\n\n'}
        <Text style={styles.bold}>3️⃣ Add a Quote:</Text> Go to the "Add Quote" screen, enter the quote, author, and select a category. Tap "Add Quote" to save it.
        {'\n\n'}
        <Text style={styles.bold}>4️⃣ Mark as Favorite:</Text> While browsing quotes, tap the ❤️ button to mark a quote as a favorite.
        {'\n\n'}
        <Text style={styles.bold}>5️⃣ Edit or Delete:</Text> Tap the ✏️ button to edit a quote or the 🗑️ button to delete it.
        {'\n\n'}
        <Text style={styles.bold}>6️⃣ View Favorites:</Text> Access your favorite quotes in the "Favorites" section for quick inspiration.
      </Text>

      <Text style={styles.footer}>
        🌟 Start exploring and let the power of words inspire you every day! 🌟
      </Text>
    </ScrollView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F3E5F5', // Matches other screens
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A148C',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#6A1B9A',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A148C',
    marginBottom: 10,
  },
  features: {
    fontSize: 16,
    color: '#4A148C',
    marginBottom: 20,
    lineHeight: 24,
  },
  steps: {
    fontSize: 16,
    color: '#6A1B9A',
    marginBottom: 20,
    lineHeight: 24,
  },
  footer: {
    fontSize: 16,
    color: '#6A1B9A',
    textAlign: 'center',
    marginTop: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
});

