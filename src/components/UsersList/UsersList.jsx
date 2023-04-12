import UsersListItem from 'components/UsersListItem/UsersListItem';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectLoader,
  selectSortedUsers,
  selectTotalUsers,
} from 'redux/selectors';
import { fetchUsers } from 'redux/usersOperations';
import scss from './UsersList.module.scss';

const UsersList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoader);
  const error = useSelector(selectError);
  const totalUsers = useSelector(selectTotalUsers);
  const sortedUsers = useSelector(selectSortedUsers);
  const [perPage, setPerPage] = useState(6);

  useEffect(() => {
    dispatch(fetchUsers(perPage));
  }, [dispatch, perPage]);

  const handleBtnClick = () => {
    setPerPage(prevPerPage => prevPerPage + 6);
  };

  return (
    <>
      {error !== null && <p>Oops, some error occured... Message: {error}</p>}
      <ul className={scss.usersListContainer}>
        {isLoading && <Loader />}
        {sortedUsers?.map(user => (
          <UsersListItem key={user.id} userInfo={user} />
        ))}
      </ul>
      {(perPage < totalUsers) & !isLoading ? (
        <button
          onClick={handleBtnClick}
          type="button"
          className={scss.showMoreBtn}
        >
          Show more
        </button>
      ) : (
        ''
      )}
    </>
  );
};
export default UsersList;
