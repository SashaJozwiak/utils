// src: https://ru.hexlet.io/code_reviews/1027623

// @ts-check
/* eslint-disable import/prefer-default-export */

// BEGIN (write your solution here)
export const getMutualFriends = (user1, user2) => {
  const friends1 = user1.getFriends();
  const friends2 = user2.getFriends();
  return friends1.filter((user) => friends2.some((friend) => friend.id === user.id));
};
// END

//OR

// @ts-check
/* eslint-disable import/prefer-default-export */

// BEGIN
export const getMutualFriends = (user1, user2) => {
  const friends1 = user1.getFriends();
  const friends2 = user2.getFriends();
  const friends2Ids = friends2.map(({ id }) => id);
  return friends1.filter(({ id }) => friends2Ids.includes(id));
};
// END

