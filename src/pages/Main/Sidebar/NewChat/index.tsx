import { Button } from 'src/components';
import style from './style.module.scss';

function NewChat() {
  return (
    <div className={style.newChat}>
      <Button round variant="primary">
        +
      </Button>
    </div>
  );
}

export default NewChat;
