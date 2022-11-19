import { wChild } from '../types';
import Styles from './Modal.module.css';

export const Modal = ({ children }: wChild) => {
  return <div className={Styles.container}>{children}</div>;
};
