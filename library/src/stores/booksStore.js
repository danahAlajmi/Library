import { makeObservable, observable, action } from 'mobx';
import axios from 'axios';
import membersStore from './membersStore';

class BooksStore {
  books = [];

  constructor() {
    makeObservable(this, {
      books: observable,
      fetchBooks: action,
      returnBook: action,
      borrowBook: action,
    });
  }

  fetchBooks = async () => {
    try {
      const response = await axios.get(
        'https://library-borrow-system.herokuapp.com/api/books'
      );
      // console.log(response.data);

      this.books = response.data;
    } catch (error) {
      console.log('fetchBooks', error);
    }
  };

  createBook = async (book) => {
    try {
      const response = await axios.post(
        'https://library-borrow-system.herokuapp.com/api/books',
        book
      );
      this.books = [...this.books, response.data];
    } catch (error) {
      console.log('createBook', error);
    }
  };

  returnBook = async (book) => {
    try {
      const response = await axios.put(
        ` https://library-borrow-system.herokuapp.com/api/books/${
          book._id
        }/return/${book.borrowedBy[book.borrowedBy.length - 1]}`
      );
      this.books = [...this.books, response.data];
    } catch (error) {
      console.log('returnBook', error);
    }
  };

  borrowBook = async (book, memberName) => {
    const member = membersStore.members.find(
      (m) => `${m.firstName} ${m.lastName}` === memberName
    );

    try {
      const response = await axios.put(
        ` https://library-borrow-system.herokuapp.com/api/books/${book._id}/borrow/${member._id}`
      );
      this.books = [...this.books, response.data];
      console.log(response.data);
    } catch (error) {
      console.log('borrowBook', error);
    }
  };
}

const booksStore = new BooksStore();
booksStore.fetchBooks();
export default booksStore;
