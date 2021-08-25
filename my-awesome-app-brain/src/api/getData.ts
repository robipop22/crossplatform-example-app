import { books } from './data';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const mockFetchFunction = async () => {
  await sleep(500);
  return books;
};

import useAsyncData from './useAsyncData';

export const fetchBooks = () => {
  const {
    data: booksData,
    isLoading: booksListIsLoading,
    error: booksListHasError,
    loadData: loadBooks,
  } = useAsyncData({
    loadOnMount: true,
    fetchFn: mockFetchFunction,
    paramsOfFetch: {},
  });

  return {
    booksData,
    booksListIsLoading,
    booksListHasError,
    loadBooks,
  };
};
