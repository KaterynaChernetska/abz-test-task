import { createSelector } from '@reduxjs/toolkit';

export const selectUsers = state => state.usersData.users;
export const selectLoader = state => state.usersData.isLoading;
export const selectError = state => state.usersData.error;
export const selectTotalUsers = state => state.usersData.totalUsers;

// export const selectFilteredContacts = createSelector(
//   [selectUsers],
//   (contacts, filter) => {
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );

export const selectSortedUsers = createSelector([selectUsers], users => {
  return [...users].sort(
    (a, b) => b.registration_timestamp - a.registration_timestamp
  );
});
// const sortedUsers = [...users].sort(
//     (a, b) => b.registration_timestamp - a.registration_timestamp
//   );
