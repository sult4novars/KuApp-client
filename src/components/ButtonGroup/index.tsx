import { ReactNode, isValidElement, Children, useState } from 'react';
import style from './style.module.scss';

type Props = {
  children?: ReactNode;
};

function ButtonGroup({ children }: Props) {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  function onClick(
    activeButtonIndex: number,
    buttonOnClickHandler: () => unknown,
  ) {
    setActiveButtonIndex(activeButtonIndex);
    buttonOnClickHandler && buttonOnClickHandler();
  }

  return (
    <div className={style.root}>
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          return (
            <child.type
              {...child.props}
              key={child.props.key || index}
              variant={activeButtonIndex === index ? 'primary' : 'default'}
              onClick={() => onClick(index, child.props.onClick)}
            >
              {child.props.children}
            </child.type>
          );
        }
        return null;
      })}
    </div>
  );
}

export default ButtonGroup;
