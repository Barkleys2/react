import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import MainSup from './Components/es/Main';
import MainCons from './Components/ec/Main';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="home" element={<Home/>}></Route>
        <Route path="suppliers" element={<MainSup/>}></Route>
        <Route path="consumers" element={<MainCons/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;