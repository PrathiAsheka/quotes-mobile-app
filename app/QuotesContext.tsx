import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Quote = {
  quote: string;
  author: string;
  category: string;
  isFavorite?: boolean;
  timestamp?: string; // Optional timestamp property
};

type QuotesContextType = {
  quotes: Quote[];
  addQuote: (newQuote: Quote) => void;
  editQuote: (index: number, updatedQuote: Quote) => void;
  deleteQuote: (index: number) => void;
  toggleFavorite: (index: number) => void;
};

const QuotesContext = createContext<QuotesContextType | undefined>(undefined);

export const QuotesProvider = ({ children }: { children: ReactNode }) => {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    const loadQuotes = async () => {
      try {
        const storedQuotes = await AsyncStorage.getItem('quotes');
        if (storedQuotes) {
          setQuotes(JSON.parse(storedQuotes));
        }
      } catch (error) {
        console.error('Failed to load quotes from AsyncStorage:', error);
      }
    };

    loadQuotes();
  }, []);

  useEffect(() => {
    const saveQuotes = async () => {
      try {
        await AsyncStorage.setItem('quotes', JSON.stringify(quotes));
      } catch (error) {
        console.error('Failed to save quotes to AsyncStorage:', error);
      }
    };

    saveQuotes();
  }, [quotes]);

  const addQuote = (newQuote: Quote) => {
    setQuotes((prevQuotes) => [...prevQuotes, newQuote]);
  };

  const editQuote = (index: number, updatedQuote: Quote) => {
    setQuotes((prevQuotes) =>
      prevQuotes.map((quote, i) => (i === index ? updatedQuote : quote))
    );
  };

  const deleteQuote = (index: number) => {
    setQuotes((prevQuotes) => prevQuotes.filter((_, i) => i !== index));
  };

  const toggleFavorite = (index: number) => {
    setQuotes((prevQuotes) =>
      prevQuotes.map((quote, i) =>
        i === index ? { ...quote, isFavorite: !quote.isFavorite } : quote
      )
    );
  };

  return (
    <QuotesContext.Provider value={{ quotes, addQuote, editQuote, deleteQuote, toggleFavorite }}>
      {children}
    </QuotesContext.Provider>
  );
};

export const useQuotes = () => {
  const context = useContext(QuotesContext);
  if (!context) {
    throw new Error('useQuotes must be used within a QuotesProvider');
  }
  return context;
};