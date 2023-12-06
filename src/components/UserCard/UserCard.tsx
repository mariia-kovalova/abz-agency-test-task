import { UserCardProps } from './types';
import { UserCardToolTip } from '../UserCardToolTip';

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const { id, name, email, phone, photo, position } = user;

  return (
    <div className="rounded-[10px] bg-white p-5 text-center">
      <img
        className="mx-auto mb-5 rounded-full"
        src={photo}
        alt={name}
        width={70}
        height={70}
      />
      <UserCardToolTip id={`${id}-name`} text={name} className="mb-5" />
      <UserCardToolTip id={`${id}-position`} text={position} />
      <UserCardToolTip id={`${id}-email`} text={email} />
      <p>{phone}</p>
    </div>
  );
};
