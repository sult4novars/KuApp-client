import Drawer from 'src/components/Drawer';
import useToggle from 'src/hooks/useToogle';
import Sidebar from './Sidebar';
import Chat from './Chat';
import style from './style.module.scss';

function Main() {
  const [isDrawerOpen, toggleDrawer] = useToggle(true);

  return (
    <div className={style.root}>
      <div className={style.sideBarWrap}>
        <Drawer isOpen={isDrawerOpen as boolean}>
          <Sidebar onDialogClick={toggleDrawer as () => void} />
        </Drawer>
      </div>
      <div className={style.contentWrap}>
        <Chat onBackButtonClick={toggleDrawer as () => void} />
      </div>
    </div>
  );
}

export default Main;
