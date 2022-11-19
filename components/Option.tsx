import { wChild } from '../types';
import Styles from './Option.module.css';
import { Pill } from './Pill';

interface IOption extends wChild {
  title: string;
  onClick: () => void;
  count: number;
}

export const Option = ({ title, children, count, onClick }: IOption) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.titleContainer} onClick={onClick}>
        {title}
        <Pill title={String(count)} count />
      </div>
      <div className={Styles.voteContainer}>{children}</div>
    </div>
  );
};
