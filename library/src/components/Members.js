import React from 'react';
import membersStore from '../stores/membersStore';
import { observer } from 'mobx-react';

function Members() {
  return (
    <div>
      <p>{JSON.stringify(membersStore.members)}</p>
    </div>
  );
}

export default observer(Members);
