import { nav } from 'src/data/nav';
import { ButtonLink } from '../ButtonLink';

export const NavBar = () => (
  <ul className="flex gap-[10px]">
    {nav.map(({ href, text }) => (
      <li key={href}>
        <ButtonLink href={href} text={text} />
      </li>
    ))}
  </ul>
);
