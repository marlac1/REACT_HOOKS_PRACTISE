import logo from "./logo.svg";

import "./App.css";

import ManageState from "./ManageState";
import ManageEffect from "./ManageEffect";

import ManageDatas from "./ManageDatas";
const App = () => {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <p>PRACTISE DATA FETCHING WITH REACT HOOKS AND AXIOS</p>
      DOC{" "}
      <a
        className="noDecoration"
        href="https://www.robinwieruch.de/react-hooks-fetch-data/?fbclid=IwAR1G4cevs_ZseJMrqRCl3oH8eV9e7dTl4krXqr4jmhCO_MpBfJrn0rKkDoM"
      >
        HERE
      </a>
      <ManageState />
      <ManageEffect />
      <div className="fetchdata">
        <br />
        <ManageDatas />
      </div>
    </div>
  );
};

export default App;
