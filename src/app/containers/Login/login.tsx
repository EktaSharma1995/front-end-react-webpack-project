import axios from 'axios';
import * as jwtDecode from 'jwt-decode';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// toast.configure();

export const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [id, setId] = useState('');

  let [status] = useState(false);
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

  const isTokenValid = token => {
    try {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp < Date.now() / 1000) {
        status = false;
        return false;
      } else {
        props.history.push('/dashboard');
        status = true;
        return true;
      }
    } catch (error) {
      props.history.push('/');
      // Return error for token validation
    }
  };

  const loginHandler = event => {
    event.preventDefault();
    // console.log(email + ", " + password);

    // make POST api call send u/p
    // API will return a JWT token
    // store that returned token in sessionStorage
    // redirect to homepage
    // if error received, display login failure message
    axios.post('http://localhost:3000/login', { email, password }).then(res => {
      const token = res.data;
      const isValid = isTokenValid(token);
      sessionStorage.setItem('token', JSON.stringify(token));
      // sessionStorage.setItem('name', JSON.stringify(name));
    });
    // props.history.push("/dashboard");
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
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
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
