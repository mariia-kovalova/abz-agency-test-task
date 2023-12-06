import clsx from 'clsx';
import { Tooltip } from 'react-tooltip';
import { useMediaQuery } from 'react-responsive';

import { UserCardToolTipProps } from './types';
import { textNormalize } from 'src/utils';
import data from 'src/data/users.json';
import { splitText } from 'src/utils/splitText';

const { max_characters } = data;

export const UserCardToolTip: React.FC<UserCardToolTipProps> = ({
  id,
  text,
  className,
}) => {
  const isLong = text.length > max_characters;
  const isDesktop = useMediaQuery({ query: '(min-width: 988px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 657px)' });
  const textWithTooltipClasses = clsx('cursor-pointer', className);

  const formatText = (text: string) => {
    if (isDesktop) return text;
    if (isTablet) return splitText(text, max_characters * 2);
    return splitText(text, max_characters);
  };

  return isLong ? (
    <>
      <p
        className={textWithTooltipClasses}
        data-tooltip-id={id}
        data-tooltip-content={formatText(text)}
      >
        {textNormalize(text, max_characters)}
      </p>
      <Tooltip
        id={id}
        place="bottom"
        noArrow={true}
        className="!ronuded-[4px] max-w-[80%] !bg-black-light !px-4 !py-1 !text-[16px]"
      />
    </>
  ) : (
    <p className={className}>{text}</p>
  );
};
