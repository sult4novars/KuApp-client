import { Avatar } from 'src/components';
import classNames from 'classnames';
import style from './style.module.scss';

type Props = {
  active?: boolean;
  onClick: () => unknown;
};

function Dialog({ active = false, onClick }: Props) {
  return (
    <div
      className={classNames(style.dialog, { [style.active]: active })}
      onClick={onClick}
    >
      <Avatar name="Arsen" />
      <div className={style.dialogContent}>
        <div className={style.dialogContentHeader}>
          <span>Arsen Sultanov</span>
          <span className={style.dialogContentHeaderTime}>23:11</span>
        </div>
        <div className={style.dialogContentFooter}>
          <div className={style.dialogContentFooterMessage}>
            <div className={style.dialogContentFooterMessageText}>
              lollollollollollollollollollollollollollollollollollollol
            </div>
          </div>
          <div className={style.dialogContentFooterMessageCount}>5+</div>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
