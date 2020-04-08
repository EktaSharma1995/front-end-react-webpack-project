import * as React from 'react';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
export const txtMessage = 'Welcome';

export const Home = () => {
  const [name, setName] = useState('');

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
    </Container>
  );
};

// export default Home;
