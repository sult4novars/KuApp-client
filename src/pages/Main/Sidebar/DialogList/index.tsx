import Dialog from '../Dialog';
import style from './style.module.scss';

type Props = {
  onDialogClick: () => unknown;
};

function DialogList({ onDialogClick }: Props) {
  const dialog = (
    <div className={style.dialogListItem}>
      <Dialog onClick={onDialogClick} />
    </div>
  );
  const dialogs = Array(40).fill(dialog);
  return (
    <div className={style.dialogList}>
      <div className={style.dialogListMessages}>{dialogs}</div>
    </div>
  );
}

export default DialogList;
