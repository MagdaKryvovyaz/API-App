import {Container, InputGroup, Card, FormControl, Button, Row } from "react-bootstrap";
import React from 'react'
import { useState, useEffect } from "react";

const CLIENT_ID ="767f6664edde4af0a6c6703c462ddc77";
const CLIENT_SECRET ="61020d2db1374efc9567fe09526907e0";
function SpotifyAPi() {
    const [searchWord, setSearchWord] = useState('')
    const [accessToken, setAccessToken] = useState('')
    const [albums, setAlbum] = useState([ ])
    
    useEffect(()=>{
        let auth ={
            method: "Post",
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            },
            body:'grant_type=client_credentials&client_id=' + CLIENT_ID +'&client_secret=' + CLIENT_SECRET 
        }
        fetch('https://accounts.spotify.com/api/token', auth)
            .then(result => result.json())
            .then(data => setAccessToken(data.access_token))
            .catch(err => console.log(err))
    },[])


    async function search() {
        console.log('Search for ' + searchWord);
        let searchPar = {
            method:'GET',
            headers :{
                "Content-Type": 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        } 
        let artistID = await fetch('https://api.spotify.com/v1/search?q='+ searchWord +'&type=artist', searchPar )
        .then(response => response.json())
        .then(data=> {return data.artists.items[0].id})

        console.log(`Artist ID is ${artistID}`);
        var returnAlbums = await fetch(`https://api.spotify.com/v1/artists/${artistID}/albums/?include_groups=album&market=NL&limit=50`, searchPar)
        .then(response => response.json())
        .then(data=> setAlbum(data.items))
    }
  return (
    <div>
         <Container style={{marginTop: "20px"}}>
            <h1>Search on Spotify</h1>
            <InputGroup className="mb-3" size="lg">
                <FormControl
                placeholder="Search for Artist"
                type="input"
                onChange= {event => setSearchWord(event.target.value)}
                />
                <Button onClick = {search}>Search</Button>   
            </InputGroup>
        </Container>
        <Container>
            <Row className="mx-2 row row-cols-4">
                {albums && albums.map(album => {
                    console.log(album);
                 return (
                    <Card key={album.id}>
                        <Card.Img src={album.images[0].url} />
                        <Card.Body>
                            <Card.Title>{album.name}</Card.Title>
                        </Card.Body>
                    </Card>
                 )
               
                })} 
            </Row>
            

        </Container>
    </div>
  )
}

export default SpotifyAPi