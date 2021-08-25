import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { fetchBooks } from 'brain/dist/api/getData';

import S from './style';

const BooksScreen: React.FC = (): React.ReactElement => {
  const { booksData, booksListHasError, booksListIsLoading, loadBooks } = fetchBooks();

  return (
    <View style={S.container}>
      <Pressable onPress={loadBooks}>
        <Text>Reload data</Text>
      </Pressable>
      {booksListIsLoading && <Text style={S.loadingText}>Loading ...</Text>}
      {booksData &&
        !booksListIsLoading &&
        booksData.map((book: any) => (
          <View key={`${book.title}-${book.author}`} style={S.booksContainer}>
            <Text style={S.text} key={book.title}>
              Title: {book.title}
            </Text>
            <Text style={S.text} key={book.subtitle}>
              Subtitle: {book.subtitle}
            </Text>
            <Text style={S.text} key={book.author}>
              Author: {book.author}
            </Text>
          </View>
        ))}
      {booksListHasError && <h2>Something went wrong</h2>}
    </View>
  );
};

export default BooksScreen;
