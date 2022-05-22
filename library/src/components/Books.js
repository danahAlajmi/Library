import React, { useState } from 'react';
import BookItem from './BookItem';
import booksStore from '../stores/booksStore';

import { observer } from 'mobx-react';
import CreateBookModal from './createBookModal';

function Books() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  let bookList = booksStore.books.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );
  bookList = bookList.map((book) => <BookItem book={book} key={book._id} />);
  return (
    <div>
      <button className="btn">
        <i className="fa fa-plus"></i>
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
      <div className="grid-container">{bookList}</div>
    </div>
  );
}

export default observer(Books);
