import bookList from './data/book-list';

export type BookList = typeof bookList;
export type BookListItem = BookList[number];
