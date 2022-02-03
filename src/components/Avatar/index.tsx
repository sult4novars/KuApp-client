import { memo } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';

type Props = {
  name: string;
  src?: string;
  round?: boolean;
};

function Avatar({ name, src, round }: Props) {
  const firstCharacterFromName = name.charAt(0).toUpperCase();
  return (
    <div className={classNames(style.root, { [style.round]: round })}>
      {src ? <img src={src} alt={name} /> : firstCharacterFromName}
    </div>
  );
}

export default memo(Avatar);
