import { Input, ButtonGroup, Button } from 'src/components';
import NewChat from './NewChat';
import DialogList from './DialogList';
import style from './style.module.scss';

type Props = {
  onDialogClick: () => void;
};

function Sidebar({ onDialogClick }: Props) {
  return (
    <div className={style.sidebar}>
      <div className={style.sidebarItem}>
        <Input placeholder="Поиск" />
      </div>
      <div className={style.sidebarItem}>
        <ButtonGroup>
          <Button>Активные</Button>
          <Button>Архив</Button>
          <Button>Все</Button>
        </ButtonGroup>
      </div>
      <DialogList onDialogClick={onDialogClick} />
      <NewChat />
    </div>
  );
}

export default Sidebar;
