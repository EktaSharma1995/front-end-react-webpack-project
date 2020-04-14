import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import axios from 'axios';
export const txtMessage = 'Welcome';

export const Home = props => {
  const [name, setName] = useState('');

  const logout = () => {
    sessionStorage.clear();
    props.history.push('/');
  };

  useEffect(() => {
    const token = JSON.parse(sessionStorage.getItem('token'));
    console.log('called');

    axios
      .get('http://localhost:3000/user', {
        headers: { Authorization: `${token}` }
      })
      .then(res => {
        setName(res.data[0].name);
        console.log(res.data);
      });
  }, []);

  return (
    <Container fluid className="home">
      <h1>{name}</h1>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      ></input>
      <br />
      <Button onClick={logout}>Logout</Button>
    </Container>
  );
};

// export default Home;
