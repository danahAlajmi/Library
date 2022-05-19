import { makeObservable, observable, action } from 'mobx';
import axios from 'axios';

class BooksStore {
  books = [];

  constructor() {
    makeObservable(this, {
      books: observable,
      fetchBooks: action,
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

  //   createRoom = async (room) => {
  //     room.id = this.rooms[this.rooms.length - 1].id + 1;
  //     room.slug = slugify(room.title);
  //     this.rooms.push(room);

  //     try {
  //       const response = await axios.post(
  //         'https://coded-task-axios-be.herokuapp.com/rooms',
  //         room
  //       );
  //       this.rooms = [...this.rooms, response.data];
  //     } catch (error) {
  //       console.log('createRoom', error);
  //     }
  //   };
}

const booksStore = new BooksStore();
booksStore.fetchBooks();
export default booksStore;
