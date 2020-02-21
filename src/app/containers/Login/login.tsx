import axios from "axios";
import * as jwtDecode from "jwt-decode";
import * as React from "react";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "../../components/Home/home";

toast.configure();

export const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [status] = useState(true);
  const notify = () => {
    if (status) {
      toast.success("Successful Login", {
        position: toast.POSITION.TOP_CENTER
      });
    } else {
      toast.error("Invalid Account", { position: toast.POSITION.TOP_CENTER });
    }
  };
  function isFormValid() {
    return email.length > 0 && password.length > 0;
  }

  function loginHandler(event) {
    event.preventDefault();
    // console.log(email + ", " + password);

    // make POST api call send u/p
    // API will return a JWT token
    // store that returned token in sessionStorage
    // redirect to homepage
    // if error receoived, display login failure message
    axios
      .post(`http://localhost:3000/login/users`, { email, password })
      .then(res => {
        const token = res.data.token;
        // localStorage.setItem("token", JSON.stringify(token));
        const isValid = isTokenValid(token);

        // if (isValid) {
        //   props.history.push("/dashboard");
        // }
      });
    // props.history.push("/dashboard");
  }

  function isTokenValid(token) {
    try {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp < Date.now() / 1000) {
        status = false;
        return false;
      } else {
        props.history.push("/dashboard");
        status = true;
        return true;
      }
    } catch (error) {
      props.history.push("/");
      // Return error for token validation
    }
  }

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
          onClick={notify}
        >
          Login
        </Button>
      </Form>
    </Container>
  );
};
