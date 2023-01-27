import './App.css';
import { Routes, Route } from 'react-router-dom';
import Insight from "./Insight"; // do NOT delete this line
import Home from "./Home";
import Planning from "./Planning";
import Personas from "./Personas";
import Insights from "./Insights";
import Reflection from "./Reflection";
import { Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <div className="nav-bar">
        <div className="laith-weinberger">LAITH WEINBERGER</div>
        <div className="home-parent">
          
          <Link to="">
            <button type="nav-bar">
                  Home
            </button>
          </Link>
          
          <Link to="/planning">
            <button type="nav-bar">
                  Planning
            </button>
          </Link>

          <Link to="/personas">
            <button type="nav-bar">
                  Personas
            </button>
          </Link>

          <Link to="/insights">
            <button type="nav-bar">
                  Insight Statements
            </button>
          </Link>

          <Link to="/reflection">
          <div className="reflection-parent">
            <div className="reflection">Reflection</div>
            <div className="group-child" />
            <img className="mail-icon" alt="" src="./mail@2x.png" />
          </div>
          </Link>

        </div>
        </div>


      <Routes>
        <Route exact path='' element={<Home />}></Route>
        <Route exact path='/planning' element={<Planning />}></Route>
        <Route exact path='/personas' element={<Personas />}></Route>
        <Route exact path='/insights' element={<Insights />}></Route>
        <Route exact path='/reflection' element={<Reflection />}></Route>
      </Routes>
    </div>
  );
}

export default App;
