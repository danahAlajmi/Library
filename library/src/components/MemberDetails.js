import React from 'react';
import membersStore from '../stores/membersStore';

import { useParams, Navigate } from 'react-router-dom';

function MemberDetails() {
  const { memberSlug } = useParams();
  const member = membersStore.members.find(
    (member) => member.slug == memberSlug
  );
  if (member == undefined) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      {' '}
      <p>{`Member: ${member.firstName} ${member.lastName}`}</p>
      <p>{`Membership: ${member.membership}`}</p>
      <p>{`Currently Borrowed Books: ${member.currentlyBorrowedBooks}`}</p>
    </div>
  );
}
export default MemberDetails;
