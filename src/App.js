import logo from './logo.svg';
import './App.css';
import Home from './Pages/HomePage';
import {Route, Routes} from "react-router-dom"
import Showpage from './Pages/ShowPage';
import Intro from './Pages/Intro';
function App() {
  return (
   <div>
    <Routes>
      <Route exact path = "/" element ={ <Intro/>}/>
    <Route exact path = "/ShowPage/:id" element={<Showpage/>}/>
    <Route exact path ="/TopAnime" element={<Home/>}/>
    </Routes>
    </div>
  )
}

export default App;
