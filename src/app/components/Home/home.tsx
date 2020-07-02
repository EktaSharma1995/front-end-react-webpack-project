import * as React from "react";
import { useState, useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Button, Container } from "react-bootstrap";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Header } from "../header/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Products } from "../products/products";
export const txtMessage = "Welcome";

export const Home = (props) => {
  const [name, setName] = useState("");
  const token = JSON.parse(sessionStorage.getItem("token"));

  const handleLogoutClick = () => {
    axios
      .get("http://localhost:3000/logout", {
        headers: { Authorization: `${token}` },
        withCredentials: true,
      })
      .then((res) => {
        sessionStorage.clear();
        props.history.push("/");
      })
      .catch((error) => {
        console.log("logout error", error);
      });
  };

  useEffect(() => {
    console.log("called");
    axios
      .get("http://localhost:3000/user", {
        headers: { Authorization: `${token}` },
        withCredentials: true,
      })
      .then((res) => {
        setName(res.data.name);
        console.log("Name: " + res.data.name);
      })
      .catch((error) => {
        console.log(error);
        setName("");
      });
  }, []);

  return (
    <Container fluid className="home">
      <ReactBootStrap.Navbar className="custom" expand="lg">
        <ReactBootStrap.Navbar.Brand href="#title">
          {name}
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="/products">
              Products
            </ReactBootStrap.Nav.Link>
            <FontAwesomeIcon
              icon={faShoppingCart}
              size="2x"
              className="github-icon"
            />
            <ReactBootStrap.Nav.Link href="/cart">Cart</ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
          <Button onClick={handleLogoutClick}>Logout</Button>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
      <Products />
    </Container>
  );
};

// export default Home;
