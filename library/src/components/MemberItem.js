import React from 'react';
import '../App.css';
import booksStore from '../stores/booksStore';
import { Link } from 'react-router-dom';

function MemberItem({ member }) {
  const cbb = [];

  // if (member.currentlyBorrowedBooks.length !== 0) {
  //   // member.currentlyBorrowedBooks.forEach((borrowedId) => {
  //   //   const booooks = booksStore.books.find((book) => book._id === borrowedId);
  //   //   // console.log(JSON.stringify(booksStore.books));
  //   //   console.log(booooks);
  //   // });
  //   member.currentlyBorrowedBooks.forEach(borrowedId=>

  // }
  return (
    <Link to={`/members/${member.slug}`}>
      <div className="grid-item">
        <p>{`Member: ${member.firstName} ${member.lastName}`}</p>
      </div>
    </Link>
  );
}

export default MemberItem;
