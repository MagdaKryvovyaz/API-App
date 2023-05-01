import React, { useState } from 'react';
import { Container, InputGroup, Card, FormControl, Button } from 'react-bootstrap';
import 'animate.css';
import axios from 'axios';

function JokeApi() {
  const [searchWord, setSearchWord] = useState('');
  const [err, setErr] = useState('');
  const [jokes, setJoke] = useState([]);

  const handleChange = (e) => {
    setSearchWord(e.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    setErr('');
    if (searchWord === '') {
      setErr("Search field can't be empty");
    } else {
      axios
        .get(`https://api.chucknorris.io/jokes/search?query=${searchWord}`)
        .then((result) => {
          console.log(result.data.result);
          setJoke(result.data.result);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <Container style={{ marginTop: '20px' }}>
        <h1>Search for Joke</h1>
        <InputGroup className="mb-3" size="lg">
          <FormControl placeholder="Search for Joke" type="input" onChange={handleChange} />
          <Button onClick={handleSumbit}>Search</Button>
        </InputGroup>
        {err ? <h5 className="err">{err}</h5> : null}
      </Container>
      <Container>
        <div className="tenor-container">
          {jokes &&
            jokes.map((joke, index) => (
              <Card
                key={joke.id}
                className={`animate__animated animate__fadeInUp animate__delay-${index + 1}s`}
                style={{ width: '18rem' }}
              >
                <Card.Body>
                  <Card.Title>
                    <p>{joke.value}</p>
                  </Card.Title>
                </Card.Body>
              </Card>
            ))}
        </div>
      </Container>
    </>
  );
}

export default JokeApi;
