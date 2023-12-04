import { UserCard } from '../UserCard/UserCard';
import { UsersListProps } from './types';

export const UsersList: React.FC<UsersListProps> = ({ users }) => (
  <ul className="flex flex-col justify-center gap-5 md:flex-row md:flex-wrap md:gap-4 xl:gap-[29px]">
    {users.map(user => (
      <li
        className="w-[100%] md:w-[calc((100%-20px)/2)] xl:w-[calc((100%-(29px*2))/3)] smOnly:mx-auto smOnly:max-w-[480px]"
        key={user.id}
      >
        <UserCard user={user} />
      </li>
    ))}
  </ul>
);
