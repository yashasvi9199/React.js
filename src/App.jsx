import './App.css';

import Navbar from "./components/Navbar";
import DynamicValue from "./components/DynamicValues";
import Css from "./components/CssStyle-external";
import Css2 from "./components/CssStyle.Inline";
import ClickHandler from './components/ClickEvent';
import ChangeVariable from "./components/Hook - useState";
import MapCycle from "./components/Map";

function App() {
  return (
    <>
      <table>
        <tr>
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
          <th>Map</th>
          <td><MapCycle /></td>
        </tr>

      </table>
    </>
  );
}

export default App;
