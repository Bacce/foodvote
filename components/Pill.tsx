import { generateColor } from '../helpers/generateColor';
import Styles from './Pill.module.css';

export const Pill = ({ title, count }: { title: string; count?: boolean }) => {
  let color;
  if (!count && title) {
    color = generateColor(title);
  } else {
    color = 'ffca42';
  }

  return (
    <div style={{ backgroundColor: `#${color}` }} className={Styles.container}>
      <div className={Styles.inner} style={{ color: `#${color}` }}>
        {title}
      </div>
    </div>
  );
};
