import { ReactNode } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';

type Props = {
  isMy?: boolean;
  children: ReactNode;
};

function MessageBuble({ isMy, children }: Props) {
  return (
    <div className={classNames(style.messageBuble, { [style.my]: isMy })}>
      {children}
    </div>
  );
}

export default MessageBuble;
