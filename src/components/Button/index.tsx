import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  round?: boolean;
  variant?: 'text' | 'primary' | 'default';
  className?: string;
}

function Button({
  round = false,
  variant = 'default',
  type = 'button',
  children,
  onClick,
}: Props) {
  return (
    <button
      type={type}
      className={classNames(style.default, style[variant], {
        [style.round]: round,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
