import React from 'react';
import booksStore from '../stores/booksStore';

import { useParams, Navigate } from 'react-router-dom';

function BookDetails() {
  const { bookSlug } = useParams();
  const book = booksStore.books.find((book) => book.slug == bookSlug);
  if (book == undefined) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      {' '}
      <p>{`Author: ${book.author} `}</p>
      <p>{`title: ${book.title}`}</p>
      <p>{`Genres: ${book.genres}`}</p>
      <p>{`Borrowed By: ${book.borrowedBy}`}</p>
      <img className="bookList-image" src={book.image} />
    </div>
  );
}
export default BookDetails;
