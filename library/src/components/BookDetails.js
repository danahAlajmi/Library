import React, { useState } from 'react';
import booksStore from '../stores/booksStore';
import membersStore from '../stores/membersStore';
import '../App.css';

import { useParams, Navigate } from 'react-router-dom';

function BookDetails() {
  const [member, setMember] = useState('');
  const { bookSlug } = useParams();
  const book = booksStore.books.find((book) => book.slug == bookSlug);

  if (typeof book === undefined) {
    return <Navigate to="/" />;
  }

  let bookCurrentlyBorrowedByMemberID = 0;
  let bookCurrentlyBorrowedByMemberFirstName = 'No';
  let bookCurrentlyBorrowedByMemberLastName = 'One';
  if (book.available === false) {
    bookCurrentlyBorrowedByMemberID =
      book.borrowedBy[book.borrowedBy.length - 1];
    bookCurrentlyBorrowedByMemberFirstName = membersStore.members.find(
      (member) => member._id === bookCurrentlyBorrowedByMemberID
    ).firstName;
    bookCurrentlyBorrowedByMemberLastName = membersStore.members.find(
      (member) => member._id === bookCurrentlyBorrowedByMemberID
    ).lastName;
  }

  return (
    <div>
      {' '}
      <p>{`Author: ${book.author} `}</p>
      <p>{`title: ${book.title}`}</p>
      <p>{`Genres: ${book.genres}`}</p>
      <p>{`Currently Borrowed By: ${bookCurrentlyBorrowedByMemberFirstName} ${bookCurrentlyBorrowedByMemberLastName}`}</p>
      <img className="bookList-image" src={book.image} />
      <div className="borrow-return">
        <div className="borrow-member">
          <div>
            <label>Member: </label>

            <select
              onChange={(e) => setMember(e.target.value)}
              className="select"
            >
              <option>Select a Member</option>
              {membersStore.members.map((member) => (
                <option
                  value={`${member.firstName} ${member.lastName}`}
                >{`${member.firstName} ${member.lastName}`}</option>
              ))}
            </select>
          </div>

          <button
            className="btn"
            onClick={() => booksStore.borrowBook(book, member)}
          >
            Borrow
          </button>
        </div>

        <button className="btn" onClick={() => booksStore.returnBook(book)}>
          Return
        </button>
      </div>
    </div>
  );
}
export default BookDetails;
