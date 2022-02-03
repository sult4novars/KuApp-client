import classNames from 'classnames';
import style from './style.module.scss';
import MessageBuble from '../MessageBuble';

const messages = [
  {
    isMy: true,
    message: 'ssjdksjkd',
  },
  {
    isMy: false,
    message: 'ssjdkaaaaaaaaajkdssjdksjkdssjdksjkdssjdksjkdssjdksjkdssjdksjkd',
  },
  {
    isMy: true,
    message: 'ssjdksjkd',
  },
  {
    isMy: true,
    message: 'ssjdksjkd',
  },
  {
    isMy: false,
    message: 'ssjdkaaaaaaaaajkdssjdksjkdssjdksjkdssjdksjkdssjdksjkdssjdksjkd',
  },
  {
    isMy: true,
    message: 'ssjdksjkd',
  },
  {
    isMy: true,
    message: 'ssjdksjkd',
  },
  {
    isMy: false,
    message: 'ssjdkaaaaaaaaajkdssjdksjkdssjdksjkdssjdksjkdssjdksjkdssjdksjkd',
  },
  {
    isMy: true,
    message: 'ssjdksjkd',
  },
  {
    isMy: true,
    message: 'ssjdksjkd',
  },
  {
    isMy: false,
    message: 'ssjdkaaaaaaaaajkdssjdksjkdssjdksjkdssjdksjkdssjdksjkdssjdksjkd',
  },
  {
    isMy: true,
    message: 'ssjdksjkd',
  },
  {
    isMy: true,
    message: 'ssjdksjkd',
  },
  {
    isMy: false,
    message: 'ssjdkaaaaaaaaajkdssjdksjkdssjdksjkdssjdksjkdssjdksjkdssjdksjkd',
  },
  {
    isMy: true,
    message: 'ssjdksjkd',
  },
  {
    isMy: true,
    message: 'ssjdksjkd',
  },
  {
    isMy: false,
    message: 'ssjdkaaaaaaaaajkdssjdksjkdssjdksjkdssjdksjkdssjdksjkdssjdksjkd',
  },
  {
    isMy: true,
    message: 'ssjdksjkd',
  },
  {
    isMy: true,
    message: 'ssjdksjkd',
  },
  {
    isMy: false,
    message: 'ssjdkaaaaaaaaajkdssjdksjkdssjdksjkdssjdksjkdssjdksjkdssjdksjkd',
  },
  {
    isMy: true,
    message: 'ssjdksjkd',
  },
  {
    isMy: true,
    message: 'ssjdksjkd',
  },
  {
    isMy: false,
    message: 'ssjdkaaaaaaaaajkdssjdksjkdssjdksjkdssjdksjkdssjdksjkdssjdksjkd',
  },
  {
    isMy: true,
    message: 'ssjdksjkd',
  },
];

function MessageList() {
  return (
    <div className={style.messageList}>
      {messages.map((item) => (
        <div
          key={item.message}
          className={classNames(style.buble, { [style.my]: item.isMy })}
        >
          <MessageBuble isMy={item.isMy}>{item.message}</MessageBuble>
        </div>
      ))}
    </div>
  );
}

export default MessageList;
