import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    setShowResults(results.length > 0);
  }, [results]);

  const search = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    const words = query.toLowerCase().split(' ');
    const filteredResults = response.data.filter(user =>
      words.every(word => user.name.toLowerCase().includes(word))
    );
    setResults(filteredResults);
  }

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    search();
  }

  const fadeProps = useSpring({
    opacity: showResults ? 1 : 0,
    marginTop: showResults ? 0 : -20,
  });

  return (
    <Container className="my-4">
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="searchForm">
              <Form.Control type="text" placeholder="Search users" value={query} onChange={handleInputChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
        </Col>
      </Row>
      <animated.div style={fadeProps}>
        <Row className="my-4">
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Website</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result) => (
                  <tr key={result.id}>
                    <td>{result.name}</td>
                    <td>{result.email}</td>
                    <td>{result.phone}</td>
                    <td>{result.website}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </animated.div>
    </Container>
  );
}

export default App;
