import NavBar from "./component/NavBar";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TenorAPI from "./component/TenorAPI";
import Homepage from "./component/Homepage";
import SpotifyAPi from "./component/SpotifyAPi"
import JokeApi from "./component/JokeApi";
import NewsAPI from "./component/NewsAPI";
import Facebook from "./component/Facebook";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/tenor' element={<TenorAPI/>}/>
          <Route path='/spotify' element={<SpotifyAPi/>}/>
          <Route path='/joke' element={<JokeApi/>}/>
          <Route path='/news' element={<NewsAPI/>}/>
          <Route path="/facebook" element={<Facebook/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
