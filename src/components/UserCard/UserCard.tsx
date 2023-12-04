import { textNormalize } from 'src/utils/textNormalize';
import { UserCardProps } from './types';

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const { name, email, phone, photo, position } = user;

  return (
    <div className="rounded-[10px] bg-white p-5 text-center">
      <img
        className="mx-auto mb-5 rounded-full"
        src={photo}
        alt={name}
        width={70}
        height={70}
      />
      <p className="mb-5">{textNormalize(name)}</p>
      <p>{textNormalize(position)}</p>
      <p>{textNormalize(email)}</p>
      <p>{phone}</p>
    </div>
  );
};
