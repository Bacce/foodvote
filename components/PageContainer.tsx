import { wChild } from '../types';
import Styles from './PageContainer.module.css';

export const PageContainer = ({ children }: wChild) => {
  return <div className={Styles.container}>{children}</div>;
};
