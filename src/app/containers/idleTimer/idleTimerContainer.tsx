/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import IdleTimer from 'react-idle-timer';
import { useRef, useState } from 'react';
import { IdleTimeOutModal } from '../../components/idleModal/idleModal';
import axios from 'axios';

export const IdleTimerContainer = (props) => {
  const [name, setName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isTimedOut, setIsTimedOut] = useState(false);
  const token = JSON.parse(sessionStorage.getItem('token'));

  let idleTimer: any = useRef(null);

  const onAction = (event) => {
    console.log('user did something', event);
    setIsTimedOut(false);
  };

  const onActive = (event) => {
    console.log('User is active', event);
    console.log('time remaining', idleTimer.getRemainingTime());
    setIsTimedOut(false);
  };

  const onIdle = (event) => {
    console.log('User is idle', event);
    console.log('last active', idleTimer.getLastActiveTime());
    const checkIsTimedOut = isTimedOut;

    if (checkIsTimedOut) {
      // props.history.push('/');
      console.log('time out');
    } else {
      setShowModal(true);
      idleTimer.reset();
      setIsTimedOut(true);
    }
  };

  const handleClose = () => {
    setShowModal(false);

    axios
      .get('http://localhost:3000/isUserLoggedIn', {
        headers: { Authorization: `${token}` },
        withCredentials: true,
      })
      .then((res) => {
        console.log('stay called' + res.data.name);
      })
      .catch((error) => {
        console.log('logout error', error);
      });
  };

  const handleLogout = () => {
    setShowModal(false);
    axios
      .get('http://localhost:3000/logout', {
        headers: { Authorization: `${token}` },
        withCredentials: true,
      })
      .then((res) => {
        // props.history.push('/');
        sessionStorage.clear();
        window.location.href = '/';
      })
      .catch((error) => {
        console.log('logout error', error);
      });
    // props.history.push('/');
  };

  return (
    <div>
      <IdleTimeOutModal
        showModal={showModal}
        handleClose={handleClose}
        handleLogout={handleLogout}
      />
      <IdleTimer
        ref={(ref) => {
          idleTimer = ref;
        }}
        element={document}
        onActive={onActive}
        onIdle={onIdle}
        onAction={onAction}
        debounce={250}
        timeout={5 * 1000}
        // timeout={1000 * 60 * 15}
      />
    </div>
  );
};
