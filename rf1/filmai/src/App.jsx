import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import MainCat from './Components/cats/Main';
import MainMovies from './Components/movies/Main';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/categories" element={<MainCat/>}></Route>
         <Route path="/movies" element={<MainMovies/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;