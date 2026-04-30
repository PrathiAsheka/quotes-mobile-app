// app/types.ts (or a similar file for type definitions)

export type RootStackParamList = {
    Categories: undefined; // Categories screen doesn't need params
    AddQuote: { category: string }; // AddQuote screen expects a 'category' parameter
    // Add other screens here if needed
  };
  