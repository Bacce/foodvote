import { wChild } from '../types';
import Styles from './Button.module.css';

interface IButton extends wChild {
  onClick: () => void;
  disabled?: boolean;
  nav?: boolean;
}

export const Button = ({ children, onClick, disabled, nav }: IButton) => {
  return (
    <button
      className={`${Styles.button} ${nav ? Styles.navButton : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
