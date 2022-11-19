import { Button } from './Button';
import { Logo } from './Logo';
import Styles from './Navigation.module.css';
import { Pill } from './Pill';

export const Navigation = ({ user, onLogoutClick }: any) => {
  return (
    <>
      {user ? (
        <div className={Styles.container}>
          <Logo />
          <div>
            <Pill title={user} />
            <Button nav onClick={onLogoutClick}>
              logout
            </Button>
          </div>
        </div>
      ) : (
        <div className={Styles.container}>
          <Logo />
        </div>
      )}
    </>
  );
};
