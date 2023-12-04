import { UsersListProps } from './types';

export const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <p>{user.name}</p>
        </li>
      ))}
    </ul>
  );
};
