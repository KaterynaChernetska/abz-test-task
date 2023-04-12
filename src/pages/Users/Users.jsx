import UsersList from 'components/UsersList/UsersList';
import scss from './Users.module.scss';

const Users = () => {
    return (
<div className={scss.usersSection}>
    <h2 id='UsersTitle' className={scss.usersTitle}>Working with GET request</h2>
   <UsersList/>
</div>
        
    )
}
export default Users;