import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import MainCat from './Components/cats/Main';
// import MainCons from './Components/ec/Main';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/categories" element={<MainCat/>}></Route>
         {/* <Route path="/consumers" element={<MainCons/>}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;