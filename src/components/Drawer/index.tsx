import { ReactNode } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';

type Props = {
  isOpen: boolean;
  children?: ReactNode;
};

function Drawer({ isOpen, children }: Props) {
  return (
    <div className={classNames(style.drawer, { [style.drawerOpen]: isOpen })}>
      {children}
    </div>
  );
}

export default Drawer;
