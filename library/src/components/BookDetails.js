import React, { useState } from "react";
import booksStore from "../stores/booksStore";
import membersStore from "../stores/membersStore";
import "../App.css";
import { observer } from "mobx-react";

import { useParams, Navigate } from "react-router-dom";

function BookDetails() {
  const [member, setMember] = useState("");
  const { bookSlug } = useParams();
  const book = booksStore.books.find((book) => book.slug == bookSlug);

  if (typeof book === undefined) {
    return <Navigate to="/" />;
  }

  let bookCurrentlyBorrowedByMemberID = 0;
  let bookCurrentlyBorrowedByMemberFirstName = "No";
  let bookCurrentlyBorrowedByMemberLastName = "One";
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
    <div className="textt body">
      {" "}
      <h3>{`Author: ${book.author} `}</h3>
      <h3>{`title: ${book.title}`}</h3>
      <h3>{`Genres: ${book.genres}`}</h3>
      <h3>{`Currently Borrowed By: ${bookCurrentlyBorrowedByMemberFirstName} ${bookCurrentlyBorrowedByMemberLastName}`}</h3>
      <br />
      <img className="bookDetails-image" src={book.image} />
      <div className="borrow-return">
        <div className="borrow-member">
          <div>
            <label>
              <h3>Member:</h3>
              {"    "}
            </label>
            <br />
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
            <br />
            <button
              className="borrow-btn"
              onClick={() => booksStore.borrowBook(book, member)}
            >
              Borrow
            </button>
            <br />
            <button
              className="return-btn"
              onClick={() => booksStore.returnBook(book)}
            >
              Return
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default observer(BookDetails);
