import React from 'react'
import { Container, InputGroup, Card, FormControl, Button } from "react-bootstrap";
import { useState } from 'react';
import axios from 'axios';
import moment from 'moment';

function NewsAPI() {
//4e00578970fb42e3a1685d24aa8c045e
const [searchWord, setSearchWord] = useState('')
const [err, setErr] = useState('')
const [news, setNews] = useState([]);

const handleChange =(e)=>{
    e.preventDefault()
    setSearchWord(e.target.value)
}
const handleSumbit = (e) => {
    e.preventDefault()
     setErr("")
     if (searchWord === '') {
      setErr("Search field can't be empty")
   } else {
      axios.get(`https://newsapi.org/v2/everything?q=${searchWord}&apiKey=4e00578970fb42e3a1685d24aa8c045e`)
    .then(result => {
        console.log(result.data.articles)
        setNews(result.data.articles)
        
      })
      .catch(err => console.log(err))
  }
}

  return (
    <>
    <Container style={{marginTop: "20px"}}>
      <h1>Search some News</h1>
      <InputGroup className="mb-3" size="lg">
        <FormControl
          placeholder="Search for News"
          type="input"
          onChange={handleChange}
        />
        <Button onClick={handleSumbit}>Search</Button>
      </InputGroup>
      {err ? <h5 className="err">{err}</h5> : null}
    </Container>
    <Container >
      <div className="tenor-container">
      {news && news.map((oneNews) => {
        return(
            
            <Card  key={oneNews.url} style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Img variant="top" src={oneNews.urlToImage} alt={oneNews.title} />
                  <Card.Title><a href={oneNews.url}> {oneNews.title}</a>
                   </Card.Title>
                   <Card.Subtitle className="mb-2 text-muted">{moment(oneNews.publishedAt).format("MMM Do YY")}</Card.Subtitle>

                  <Card.Text>{oneNews.description}</Card.Text>
                  <footer className="blockquote-footer">
                    By  <cite title="Source Title">{oneNews.author}</cite>
                    </footer>

                </Card.Body>
              </Card> 
        )
      })}
      </div>
      
    </Container>
  </>
  )
}

export default NewsAPI

