import { useContext, useEffect, useRef } from 'react';
import { isContext } from 'vm';
import { AppContext } from '../context/AppContext';
import { Button } from './Button';
import { Logo } from './Logo';
import { Modal } from './Modal';
import Styles from './Navigation.module.css';
import { Pill } from './Pill';
import { Spacer } from './Spacer';

export const Navigation = () => {
  const context = useContext(AppContext);
  const userInputRef = useRef<any>();

  const handleLogout = () => {
    context.setContextState({ username: '' });
    localStorage.setItem('username', '');
  };

  const handleSaveUser = () => {
    const username = userInputRef.current.value;

    if (username) {
      context.setContextState({ username });
      localStorage.setItem('username', username);
    } else {
      alert('please enter a valid username');
    }
  };

  useEffect(() => {
    const username = localStorage.getItem('username');
    console.log('Local get username', username);
    if (username) {
      context.setContextState({ username });
      //setUser(username);
    }
  }, []);

  // <Navigation user={user ? user : undefined} onLogoutClick={handleLogout} />
  return (
    <>
      {context.contextState.username ? (
        <div className={Styles.container}>
          <Logo />
          <div>
            <Pill title={context.contextState.username} />
            <Button nav onClick={handleLogout}>
              logout
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div className={Styles.container}>
            <Logo />
          </div>

          <Modal>
            <h1>Welcome</h1>
            <input
              ref={userInputRef}
              autoFocus
              type="text"
              placeholder="Username"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSaveUser();
                }
              }}
            />
            <Spacer />

            <Button onClick={handleSaveUser}>Login</Button>
          </Modal>
        </>
      )}
    </>
  );
};
