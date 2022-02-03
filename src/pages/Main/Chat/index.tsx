import Header from './Header';
import MessageList from './MessageList';
import Footer from './Footer';
import style from './style.module.scss';

type Props = {
  onBackButtonClick: () => unknown;
};

function Chat({ onBackButtonClick }: Props) {
  return (
    <div className={style.root}>
      <Header onBackButtonClick={onBackButtonClick} />
      <MessageList />
      <Footer />
    </div>
  );
}

export default Chat;
