import { fetchBooks } from 'brain/dist/api/getData';

import { container } from './style';

const BooksScreen: React.FC = (): React.ReactElement => {
  const { booksData, booksListHasError, booksListIsLoading, loadBooks } = fetchBooks();

  return (
    <div className={'container'}>
      <style jsx>{container}</style>
      <button onClick={loadBooks}>Reload data</button>
      {booksListIsLoading && <h2>Loading ...</h2>}
      {booksData &&
        !booksListIsLoading &&
        booksData.map((book: any) => (
          <div className={'books-container'} key={`${book.title}-${book.author}`}>
            <p key={book.title}>Title: {book.title}</p>
            <p key={book.subtitle}>Subtitle: {book.subtitle}</p>
            <p key={book.author}>Author: {book.author}</p>
          </div>
        ))}
      {booksListHasError && <h2>Something went wrong</h2>}
    </div>
  );
};

export default BooksScreen;
