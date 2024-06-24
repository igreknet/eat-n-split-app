import React from 'react';
import { Friend } from './Friend';

export function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map(el => (
        <Friend friend={el} key={el.id} onSelection={onSelection} selectedFriend={selectedFriend} />
      ))}
    </ul>
  );
}
