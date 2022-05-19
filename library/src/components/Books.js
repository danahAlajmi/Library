import React, { useState } from 'react';
import BookItem from './BookItem';
import booksStore from '../stores/booksStore';

import { observer } from 'mobx-react';
import CreateBookModal from './createBookModal';

function Books() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const bookList = booksStore.books.map((book) => (
    <BookItem book={book} key={book._id} />
  ));
  return (
    <div>
      <button className="btn">
        <i className="fa fa-plus"></i>
        <span onClick={openModal}>Add book</span>
        <CreateBookModal isOpen={isOpen} closeModal={closeModal} />
      </button>
      ;<div className="grid-container">{bookList}</div>
    </div>
  );
}

export default observer(Books);
