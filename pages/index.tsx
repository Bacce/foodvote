import React, { useState, useEffect, useRef } from 'react';
import SocketIOClient from 'socket.io-client';
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
      console.log('store username', username);
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
      <nav>
        {user ? (
          <>
            welcome {user}
            <button onClick={handleLogout}>logout</button>
          </>
        ) : (
          <></>
        )}
        <hr />
      </nav>

      {connected ? (
        <>
          {user ? (
            <>
              <div>
                {options.map((option, index) => (
                  <div key={`options-container-${index}`}>
                    <button
                      onClick={() => {
                        sendMessage(option.id);
                      }}
                    >
                      {option.name}
                    </button>

                    {choices.map((choice, id) => {
                      return Number(choice.msg) === option.id ? (
                        <span key={`user-${id}`}>{choice.user} - </span>
                      ) : (
                        <></>
                      );
                    })}
                  </div>
                ))}
              </div>
            </>
          ) : (
            // Select user first
            <>
              User:
              <input
                ref={userInputRef}
                autoFocus
                type="text"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSaveUser();
                  }
                }}
              />
              <button onClick={handleSaveUser}>Login</button>
            </>
          )}
        </>
      ) : (
        <>Initializing...</>
      )}
    </>
  );
};

export default Index;
