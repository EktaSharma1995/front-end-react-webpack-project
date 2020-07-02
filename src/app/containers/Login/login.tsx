import axios from 'axios';
import * as jwtDecode from 'jwt-decode';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { fakeAuth } from '../../App';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';s

// toast.configure();

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [id, setId] = useState('');
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const [status] = useState(false);
  // const notify = () => {
  //   if (status === true) {
  //     toast.success('Successful Login', {
  //       position: toast.POSITION.TOP_CENTER
  //     });
  //   } else {
  //     toast.error('Invalid Account', { position: toast.POSITION.TOP_CENTER });
  //   }
  // };
  const isFormValid = () => {
    return email.length > 0 && password.length > 0;
  };

  const isTokenValid = (token) => {
    try {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp < Date.now() / 1000) {
        console.log('Invalid token / expired');
        // status = false;
        return false;
      } else {
        console.log('Valid token');
        // props.history.push('/dashboard');
        // status = true;
        return true;
      }
    } catch (error) {
      console.log(error);
      // props.history.push('/');
    }
  };

  const loginHandler = (event) => {
    event.preventDefault();

    fakeAuth.authenticate(() => {
      setRedirectToReferrer(true);
    });
    axios
      .post(
        'http://localhost:3000/login',
        { email, password },
        { withCredentials: true }
      )
      .then((res) => {
        const token = res.data.token;
        const isValid = isTokenValid(token);
        sessionStorage.setItem('token', JSON.stringify(token));

        if (isValid) {
          props.history.push('/dashboard');
        } else {
          props.history.push('/');
        }
      });
  };

  return (
    <Container fluid className="login">
      <Form onSubmit={loginHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="loginBtn"
          disabled={!isFormValid()}
          // onClick={notify}
        >
          Login
        </Button>
      </Form>
    </Container>
  );
};
