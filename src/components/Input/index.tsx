import { ReactNode } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';

type Props = {
  leftChildren?: ReactNode;
  rightChildren?: ReactNode;
  className?: string;
  [inputProps: string]: any;
};

function Input({
  leftChildren,
  rightChildren,
  className,
  ...inputProps
}: Props) {
  return (
    <div tabIndex={-1} className={classNames(style.root, className)}>
      {leftChildren}
      <input {...inputProps} className={style.input} />
      {rightChildren}
    </div>
  );
}

export default Input;
