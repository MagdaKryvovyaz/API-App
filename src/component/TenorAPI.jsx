

import { useEffect, useState } from "react"; 
import axios from "axios";
import React from 'react'
import { Card } from "react-bootstrap";

export default function TenorAPI() {
    const [image, setImage] = useState([])
    const [searchKeyWord, setWord ] = useState('') 
    const [err, setErr] = useState('') 
    
    const handleChange =(e) => {
        e.preventDefault()
        setWord(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setErr('')
        if( searchKeyWord === '') {
            setErr("Search field can't be empty")
        } else {
            axios.get(`https://tenor.googleapis.com/v2/search?key=AIzaSyB0ZNL52rr18Wg9k0M5KmE2ChIAEnZEX0Y&q=${searchKeyWord}`)
            .then(result => {
                console.log(result.data.results);
                setImage(result.data.results);
            })
            .catch (err => console.log(err))
        }
        
    }


  return (
    <div>
        <h1>Search on Tenor</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search...."  onChange={handleChange}/>
            <button onClick={handleSubmit}>Search</button>
        </form>
        {err ? <h5 className="err">{err}</h5>  : null}
        <div className="tenor-container">
            {image && image.map(img => {
                return(
                        <Card key={img.id} style={{ width: '22rem' }}>
                        <Card.Img variant="top" src={img.media_formats.gif.url} />
                        <Card.Body>
                            <Card.Title>{img.content_description}</Card.Title>           
                        </Card.Body>
                        </Card>
                    )
                })
            }
        </div>
    </div>
  )
}
