import clsx from 'clsx';
import { smoothScroll } from 'src/utils';
import { ButtonLinkProps } from './types';

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  text,
  className,
}) => {
  const linkClasses = clsx('button-link', className);

  return (
    <a className={linkClasses} href={href} onClick={e => smoothScroll(e, href)}>
      {text}
    </a>
  );
};
