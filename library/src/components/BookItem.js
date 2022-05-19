import React from 'react';
import '../App.css';
// import booksStore from '../stores/booksStore';
import { Link } from 'react-router-dom';

function BookItem({ book }) {
  //   const cbb = [];

  // if (book.currentlyBorrowedBooks.length !== 0) {
  //   // book.currentlyBorrowedBooks.forEach((borrowedId) => {
  //   //   const booooks = booksStore.books.find((book) => book._id === borrowedId);
  //   //   // console.log(JSON.stringify(booksStore.books));
  //   //   console.log(booooks);
  //   // });
  //   book.currentlyBorrowedBooks.forEach(borrowedId=>

  // }
  return (
    <Link to={`/books/${book.slug}`}>
      <div className="grid-item">
        <p>{`title: ${book.title}`}</p>

        <img className="bookList-image" src={book.image} />
      </div>
    </Link>
  );
}

export default BookItem;
