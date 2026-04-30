import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { QuotesProvider } from '../QuotesContext'; // Import QuotesProvider

export default function TabsLayout() { // Screen Navigations
  return (
    <QuotesProvider> {/* Wrap the entire Tabs component with QuotesProvider */}
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#822A94',
          tabBarLabelStyle: { fontSize: 12 },
        }}
      >
        <Tabs.Screen
          name="HomeScreen"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }: { color: string; size: number }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="QuotesListScreen"
          options={{
            title: 'Quotes',
            tabBarIcon: ({ color, size }: { color: string; size: number }) => (
              <Ionicons name="book-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="AddQuoteScreen"
          options={{
            title: 'Add',
            tabBarIcon: ({ color, size }: { color: string; size: number }) => (
              <Ionicons name="add-circle-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Category"
          options={{
            title: 'Category',
            tabBarIcon: ({ color, size }: { color: string; size: number }) => (
              <Ionicons name="grid-outline" size={size} color={color} /> 
            ),
          }}
        />
        <Tabs.Screen
          name="FavoriteQuotesScreen"
          options={{
            title: 'Favorites',
            tabBarIcon: ({ color, size }: { color: string; size: number }) => (
              <Ionicons name="heart-outline" size={size} color={color} />
            ),
          }}
        />
        
        <Tabs.Screen
          name="AboutScreen"
          options={{
            title: 'About',
            tabBarIcon: ({ color, size }: { color: string; size: number }) => (
              <Ionicons name="help-circle-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </QuotesProvider>        
  );
}