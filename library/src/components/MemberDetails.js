import React from 'react';
import membersStore from '../stores/membersStore';
import booksStore from '../stores/booksStore';

import { useParams, Navigate } from 'react-router-dom';

function MemberDetails() {
  const { memberSlug } = useParams();
  const member = membersStore.members.find(
    (member) => member.slug == memberSlug
  );
  if (member == undefined) {
    return <Navigate to="/" />;
  }
  let cbb = [];
  member.currentlyBorrowedBooks.map((mem) => {
    booksStore.books.forEach((boook) => {
      if (boook._id == mem) {
        cbb.push(boook.title);
      }
    });
  });
  if (cbb.length == 0) {
    cbb = 'None';
  }
  return (
    <div className="textt">
      {' '}
      <p>{`Member: ${member.firstName} ${member.lastName}`}</p>
      <p>{`Membership: ${member.membership}`}</p>
      <p>{`Currently Borrowed Books: ${cbb}`}</p>
    </div>
  );
}
export default MemberDetails;
