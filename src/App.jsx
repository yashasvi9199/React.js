// Importing React Libraries
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Importing CSS
import './App.css';

// Importing Components
import Navbar from "./components/Navbar";
import DynamicValue from "./components/DynamicValues";
import Css from "./components/CssStyle-external";
import Css2 from "./components/CssStyle.Inline";
import ClickHandler from './components/ClickEvent';
import ChangeVariable from "./components/Hook - useState";
import ChangeVar from "./components/Hook - useEffect";
import MapCycle from "./components/Map";
import Parent from "./components/PropsParent";
import Fetch from "./components/Fetch";
import RouteComp from "./components/Route";

function App() {
  return (
    <>
      <table>

        <tbody>
          {/* <tr>
            <th>NavBar</th>
            <td><Navbar /></td>
          </tr>

          <tr>
            <th>Dynamic Values</th>
            <td><DynamicValue /></td>
          </tr>

          <tr>
            <th>External CSS</th>
            <td><Css /></td>
          </tr>

          <tr>
            <th>External CSS</th>
            <td><Css2 /></td>
          </tr>

          <tr>
            <th>Click Event</th>
            <td><ClickHandler /></td>
          </tr>


          <tr>
            <th>Hook - useState</th>
            <td><ChangeVariable /></td>
          </tr>

          <tr>
            <th>Hook - useEffect</th>
            <td><ChangeVar /></td>
          </tr>

          <tr>
            <th>Map</th>
            <td><MapCycle /></td>
          </tr>

          <tr>
            <th>Props</th>
            <td><Parent /></td>
          </tr>

          <tr>
            <th>Fetch</th>
            <td><Fetch /></td>
          </tr> */}

          <tr>
            <th>Router</th>
            <td>
              <Router>

                {/*  The reason for adding 'exact' keyword is that it should match exact case. If there is a path like /router/create, then without 'exact' keyword, it will also match /router/create and redirect it to /router. As it contains /router in its path */}
                
                  <Routes>
                    <Route exact path= '/router/:id?' element={<RouteComp />} />   
                    {/* to pass the parameters in router we use :$parameterName (semicolon) 
                    The ? is added to indicate optionality of the parameter */}
                  </Routes>
                  <Link to="/router">Router Link</Link> <br />
                  <Link to="/">Home</Link>

              </Router>
              
            </td>
          </tr>

        </tbody>
      </table>
    </>
  );
}

export default App;
