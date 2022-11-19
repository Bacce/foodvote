import React, { useState, useEffect, useRef } from 'react';
import SocketIOClient from 'socket.io-client';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { Navigation } from '../components/Navigation';
import { Option } from '../components/Option';
import { PageContainer } from '../components/PageContainer';
import { Pill } from '../components/Pill';
import { Spacer } from '../components/Spacer';
import { IChoice, IOption } from '../types';

const Index: React.FC = () => {
  const userInputRef = useRef<any>();
  const [user, setUser] = useState('');
  const [connected, setConnected] = useState<boolean>(false);
  const [choices, setChoices] = useState<IChoice[]>([]);
  const [options, setOptions] = useState<IOption[]>([]);

  const handleSaveUser = () => {
    const username = userInputRef.current.value;

    if (username) {
      localStorage.setItem('username', username);
      setUser(username);
    } else {
      alert('please enter username');
    }
  };

  const handleLogout = () => {
    localStorage.setItem('username', '');
    setUser('');
  };

  const sendMessage = async (msg: number) => {
    if (msg > -1) {
      const message: IChoice = {
        user,
        msg: String(msg),
      };

      fetch('/api/choice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });
    }
  };

  const getOptions = () => {
    // Get all the options to select from
    fetch('/api/options', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setOptions(data);
      })
      .catch((e) => {
        console.error('ERROR: request error', e);
      });
  };

  const getChoices = () => {
    // Get all the options to select from
    fetch('/api/choice', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setChoices(data);
      })
      .catch((e) => {
        console.error('ERROR: request error', e);
      });
  };

  useEffect((): any => {
    const username = localStorage.getItem('username');
    console.log('Local get username', username);
    if (username) {
      setUser(username);
    }

    getOptions();
    getChoices();

    const socket = SocketIOClient.connect(process.env.BASE_URL, {
      path: '/api/socketio',
    });

    socket.on('connect', () => {
      console.log('SOCKET CONNECTED!', socket.id);
      setConnected(true);
    });

    socket.on('allChoices', (allChoices: IChoice[]) => {
      setChoices([...allChoices]);
    });

    // socket disconnet onUnmount if exists
    if (socket) return () => socket.disconnect();
  }, []);

  return (
    <>
      <Navigation user={user ? user : undefined} onLogoutClick={handleLogout} />
      <PageContainer>
        {connected ? (
          <>
            {user ? (
              <>
                <div>
                  {options.map((option, index) => (
                    <Option
                      key={`options-container-${index}`}
                      onClick={() => sendMessage(option.id)}
                      title={option.name}
                      count={
                        choices.filter((item) => item.msg === String(index))
                          .length
                      }
                    >
                      {choices.map((choice, id) => {
                        return Number(choice.msg) === option.id ? (
                          <Pill key={`user-${id}`} title={choice.user} />
                        ) : (
                          <></>
                        );
                      })}
                    </Option>
                  ))}
                </div>
              </>
            ) : (
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
            )}
          </>
        ) : (
          <>Initializing...</>
        )}
      </PageContainer>
    </>
  );
};

export default Index;
