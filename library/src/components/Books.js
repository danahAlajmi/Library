import React from 'react';
import booksStore from '../stores/booksStore';
import { observer } from 'mobx-react';

function Books() {
  return (
    <div>
      <p>{JSON.stringify(booksStore.books)}</p>
    </div>
  );
}

export default observer(Books);
