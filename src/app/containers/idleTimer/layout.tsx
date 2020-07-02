// /* eslint-disable prefer-const */
// import * as React from 'react';
// import * as ReactBootStrap from 'react-bootstrap';
// import { Home } from '../../components/home/home';
// import { IdleTimeOutModal } from '../../components/idleModal/idleModal';
// import * as PropTypes from 'prop-types';
// import { render } from 'react-dom';
// import { useState, useEffect } from 'react';
// import IdleTimer from 'react-idle-timer';
// import { Switch, Route } from 'react-router-dom';

// export const Layout = (props) => {
//   const [timeout, setTimeout] = useState(1000 * 5 * 1);
//   const [showModal, setShowModal] = useState(false);
//   const [userLoggedIn, setUserLoggedIn] = useState(false);
//   const [isTimedOut, setIsTimedOut] = useState(false);
//   let [idleTimer, setIdleTimer] = useState(null);

//   const onAction = (event) => {
//     console.log('user did something', event);
//     setIsTimedOut(false);
//   };

//   const onActive = (event) => {
//     console.log('User is active', event);
//     setIsTimedOut(false);
//   };

//   const onIdle = (event) => {
//     console.log('User is idle', event);
//     const checkIsTimedOut = isTimedOut;

//     if (checkIsTimedOut) {
//       props.history.push('/');
//     } else {
//       setShowModal(true);
//       idleTimer.reset();
//       setIsTimedOut(true);
//     }
//   };

//   const handleClose = () => {
//     setShowModal(false);
//   };

//   const handleLogout = () => {
//     setShowModal(false);
//     props.history.push('/');
//   };
//   return (
//     <>
//       <IdleTimer
//         ref={(ref) => {
//           idleTimer = ref;
//         }}
//         element={document}
//         onActive={onActive}
//         onIdle={onIdle}
//         onAction={onAction}
//         debounce={250}
//         timeout={timeout}
//       />
//       <div className="">
//         <Switch>
//           <Route
//             exact
//             path={`${match.path}dashboard`}
//             render={(props) => <Home {...props} />}
//           />
//         </Switch>
//         <IdleTimeOutModal
//           showModal={showModal}
//           handleClose={handleClose}
//           handleLogout={handleLogout}
//         />
//       </div>
//     </>
//   );
// };
