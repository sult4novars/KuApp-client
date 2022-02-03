import { Input, Button } from 'src/components';
import style from './style.module.scss';

function Footer() {
  return (
    <footer className={style.chatFooter}>
      <Input placeholder="Введите сообщение" />
      <div className={style.chatFooterButtonWrap}>
        <Button variant="primary">Отправить</Button>
      </div>
    </footer>
  );
}

export default Footer;
