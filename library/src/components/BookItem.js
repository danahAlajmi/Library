import React from 'react';
import '../App.css';
// import booksStore from '../stores/booksStore';
import { Link } from 'react-router-dom';

function BookItem({ book }) {
  return (
    <Link to={`/books/${book.slug}`}>
      <div className="grid-item">
        <p>{book.title}</p>
        <p>{`${book.genres}`}</p>
        <img className="bookList-image" src={book.image} />
      </div>
    </Link>
  );
}

export default BookItem;
