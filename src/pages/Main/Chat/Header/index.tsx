import { Button, Avatar } from 'src/components';
import { ReactComponent as Arrow } from 'src/assets/icons/arrow.svg';
import style from './style.module.scss';

type Props = {
  name?: string;
  onBackButtonClick: () => unknown;
};

function Header({ name, onBackButtonClick }: Props) {
  return (
    <head className={style.header}>
      <div className={style.headerBackButton}>
        <Button variant="text" onClick={onBackButtonClick}>
          <Arrow />
        </Button>
      </div>
      <div className={style.headerAvatar}>
        <Avatar name="Arsen" />
      </div>
      <div className={style.headerUserInformation}>
        <p className={style.headerUserInformationName}>Arsen</p>
        <div className={style.headerUserInformationIndicators}>
          <div className={style.headerUserInformationOnlineIndicator} />
          <span className={style.headerUserInformationOnlineLabel}>Online</span>
        </div>
      </div>
    </head>
  );
}

export default Header;
