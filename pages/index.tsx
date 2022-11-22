import React, { useState, useEffect, useContext } from 'react';
import SocketIOClient from 'socket.io-client';
import { Option } from '../components/Option';
import { PageContainer } from '../components/PageContainer';
import { Pill } from '../components/Pill';
import { AppContext } from '../context/AppContext';
import { IChoice, IOption } from '../types';

const Index: React.FC = () => {
  const context = useContext(AppContext);
  const [connected, setConnected] = useState<boolean>(false);
  const [choices, setChoices] = useState<IChoice[]>([]);
  const [options, setOptions] = useState<IOption[]>([]);

  const sendMessage = async (msg: number) => {
    if (msg > -1) {
      const message: IChoice = {
        user: context.contextState.username,
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
    // Get all previous choices
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
    getOptions();
    getChoices();

    // @ts-ignore:next-line
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

    // socket disconnet onUnmount
    if (socket) return () => socket.disconnect();
  }, []);

  return (
    <>
      <PageContainer>
        {connected ? (
          <>
            {context.contextState.username ? (
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
            ) : (
              <></>
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
