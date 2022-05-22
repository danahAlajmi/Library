import React, { useState } from 'react';
import BookItem from './BookItem';
import booksStore from '../stores/booksStore';

import { observer } from 'mobx-react';
import CreateBookModal from './createBookModal';

function Books() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('');
  const genres = [
    'Action',
    'Fantasy',
    'Sci-Fi',
    'Romance',
    'Fiction',
    'Self-Help',
    'Thriller',
    'Suspense',
    ' Biography',
    'Business',
    'Entrepreneurship',
    'Crime',
    'Mystery',
  ];
  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  let bookList = booksStore.books.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );
  if (genre != '') {
    bookList = bookList.filter((book) => book.genres.includes(genre));
  }
  bookList = bookList.map((book) => <BookItem book={book} key={book._id} />);
  return (
    <div>
      <div className="top">
        <button className="btn">
          {/* <i className="fa fa-plus"></i> */}
          <span onClick={openModal}>Add book</span>
          <CreateBookModal isOpen={isOpen} closeModal={closeModal} />
        </button>

        <input
          type="search"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={(e) => setQuery(e.target.value)}
        />

        <select
          aria-label="Default select example"
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="" selected>
            Select a Genre
          </option>

          {genres.map((genre) => {
            return <option value={genre}>{genre}</option>;
          })}
        </select>
      </div>
      <div className="body">
        {' '}
        <div className="grid-container">{bookList}</div>
      </div>
    </div>
  );
}

export default observer(Books);
